import MainLayout from 'src/layouts/MainLayout/MainLayout'
import TshirtsCell from 'src/components/TshirtsCell'

const TshirtsPage = ({ bandSlug }) => {
  return (
    <MainLayout>
      {(addItem) => (
        <TshirtsCell bandSlug={bandSlug} addItem={addItem} />
      )}
    </MainLayout>
  )
}

export default TshirtsPage
