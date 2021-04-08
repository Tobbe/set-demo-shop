import TshirtsLayout from 'src/layouts/Admin/TshirtsLayout'
import EditTshirtCell from 'src/components/Admin/EditTshirtCell'

const EditTshirtPage = ({ id }) => {
  return (
    <TshirtsLayout>
      <EditTshirtCell id={id} />
    </TshirtsLayout>
  )
}

export default EditTshirtPage
