import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BAND_MUTATION = gql`
  mutation DeleteBandMutation($id: Int!) {
    deleteBand(id: $id) {
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

const Band = ({ band }) => {
  const [deleteBand] = useMutation(DELETE_BAND_MUTATION, {
    onCompleted: () => {
      toast.success('Band deleted')
      navigate(routes.bands())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete band ' + id + '?')) {
      deleteBand({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Band {band.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{band.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{band.slug}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{band.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBand({ id: band.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(band.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Band
