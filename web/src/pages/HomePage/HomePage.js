import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      {() => (
        <>
          <h1>Home</h1>
          <p>Click any of the band names to the left to start shopping</p>
        </>
      )}
    </MainLayout>
  )
}

export default HomePage
