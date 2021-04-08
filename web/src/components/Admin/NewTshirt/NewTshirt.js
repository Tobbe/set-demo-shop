import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TshirtForm from 'src/components/Admin/TshirtForm'

import { QUERY } from 'src/components/Admin/TshirtsCell'

const CREATE_TSHIRT_MUTATION = gql`
  mutation CreateTshirtMutation($input: CreateTshirtInput!) {
    createTshirt(input: $input) {
      id
    }
  }
`

const NewTshirt = () => {
  const [createTshirt, { loading, error }] = useMutation(
    CREATE_TSHIRT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Tshirt created')
        navigate(routes.adminTshirts())
      },
    }
  )

  const onSave = (input) => {
    createTshirt({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tshirt</h2>
      </header>
      <div className="rw-segment-main">
        <TshirtForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTshirt
