import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TshirtForm from 'src/components/Admin/TshirtForm'

export const QUERY = gql`
  query FIND_TSHIRT_BY_ID($id: Int!) {
    tshirt: tshirt(id: $id) {
      id
      image
      bandSlug
    }
  }
`
const UPDATE_TSHIRT_MUTATION = gql`
  mutation UpdateTshirtMutation($id: Int!, $input: UpdateTshirtInput!) {
    updateTshirt(id: $id, input: $input) {
      id
      image
      bandSlug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ tshirt }) => {
  const [updateTshirt, { loading, error }] = useMutation(
    UPDATE_TSHIRT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tshirt updated')
        navigate(routes.adminTshirts())
      },
    }
  )

  const onSave = (input, id) => {
    updateTshirt({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Tshirt {tshirt.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TshirtForm
          tshirt={tshirt}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
