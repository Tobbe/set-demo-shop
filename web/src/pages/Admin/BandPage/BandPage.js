import BandsLayout from 'src/layouts/Admin/BandsLayout'
import BandCell from 'src/components/Admin/BandCell'

const BandPage = ({ id }) => {
  return (
    <BandsLayout>
      <BandCell id={id} />
    </BandsLayout>
  )
}

export default BandPage
