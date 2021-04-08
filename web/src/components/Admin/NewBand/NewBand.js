import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import BandForm from 'src/components/Admin/BandForm'

const CREATE_BAND_MUTATION = gql`
  mutation CreateBandMutation($input: CreateBandInput!) {
    createBand(input: $input) {
      id
    }
  }
`

const NewBand = () => {
  const [createBand, { loading, error }] = useMutation(CREATE_BAND_MUTATION, {
    onCompleted: () => {
      toast.success('Band created')
      navigate(routes.bands())
    },
  })

  const onSave = (input) => {
    createBand({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Band</h2>
      </header>
      <div className="rw-segment-main">
        <BandForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBand
