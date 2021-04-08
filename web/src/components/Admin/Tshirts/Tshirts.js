import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/TshirtsCell'

const DELETE_TSHIRT_MUTATION = gql`
  mutation DeleteTshirtMutation($id: Int!) {
    deleteTshirt(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TshirtsList = ({ tshirts }) => {
  const [deleteTshirt] = useMutation(DELETE_TSHIRT_MUTATION, {
    onCompleted: () => {
      toast.success('Tshirt deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tshirt ' + id + '?')) {
      deleteTshirt({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Band slug</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tshirts.map((tshirt) => (
            <tr key={tshirt.id}>
              <td>{truncate(tshirt.id)}</td>
              <td>{truncate(tshirt.image)}</td>
              <td>{truncate(tshirt.bandSlug)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminTshirt({ id: tshirt.id })}
                    title={'Show tshirt ' + tshirt.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditTshirt({ id: tshirt.id })}
                    title={'Edit tshirt ' + tshirt.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete tshirt ' + tshirt.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tshirt.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TshirtsList
