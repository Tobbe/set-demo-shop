import TshirtsLayout from 'src/layouts/Admin/TshirtsLayout'
import TshirtCell from 'src/components/Admin/TshirtCell'

const TshirtPage = ({ id }) => {
  return (
    <TshirtsLayout>
      <TshirtCell id={id} />
    </TshirtsLayout>
  )
}

export default TshirtPage
