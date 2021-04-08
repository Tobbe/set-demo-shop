import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/BandsCell'

const DELETE_BAND_MUTATION = gql`
  mutation DeleteBandMutation($id: Int!) {
    deleteBand(id: $id) {
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

const BandsList = ({ bands }) => {
  const [deleteBand] = useMutation(DELETE_BAND_MUTATION, {
    onCompleted: () => {
      toast.success('Band deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete band ' + id + '?')) {
      deleteBand({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {bands.map((band) => (
            <tr key={band.id}>
              <td>{truncate(band.id)}</td>
              <td>{truncate(band.slug)}</td>
              <td>{truncate(band.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.band({ id: band.id })}
                    title={'Show band ' + band.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBand({ id: band.id })}
                    title={'Edit band ' + band.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete band ' + band.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(band.id)}
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

export default BandsList
