import BandsLayout from 'src/layouts/Admin/BandsLayout'
import EditBandCell from 'src/components/Admin/EditBandCell'

const EditBandPage = ({ id }) => {
  return (
    <BandsLayout>
      <EditBandCell id={id} />
    </BandsLayout>
  )
}

export default EditBandPage
