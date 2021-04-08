import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BandForm from 'src/components/Admin/BandForm'

export const QUERY = gql`
  query FIND_BAND_BY_ID($id: Int!) {
    band: band(id: $id) {
      id
      slug
      name
    }
  }
`
const UPDATE_BAND_MUTATION = gql`
  mutation UpdateBandMutation($id: Int!, $input: UpdateBandInput!) {
    updateBand(id: $id, input: $input) {
      id
      slug
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ band }) => {
  const [updateBand, { loading, error }] = useMutation(UPDATE_BAND_MUTATION, {
    onCompleted: () => {
      toast.success('Band updated')
      navigate(routes.bands())
    },
  })

  const onSave = (input, id) => {
    updateBand({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Band {band.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BandForm band={band} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
