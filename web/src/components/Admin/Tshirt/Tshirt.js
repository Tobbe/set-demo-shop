import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/TshirtsCell'

const DELETE_TSHIRT_MUTATION = gql`
  mutation DeleteTshirtMutation($id: Int!) {
    deleteTshirt(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Tshirt = ({ tshirt }) => {
  const [deleteTshirt] = useMutation(DELETE_TSHIRT_MUTATION, {
    onCompleted: () => {
      toast.success('Tshirt deleted')
      navigate(routes.adminTshirts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tshirt ' + id + '?')) {
      deleteTshirt({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tshirt {tshirt.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tshirt.id}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{tshirt.image}</td>
            </tr>
            <tr>
              <th>Band slug</th>
              <td>{tshirt.bandSlug}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditTshirt({ id: tshirt.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tshirt.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Tshirt
