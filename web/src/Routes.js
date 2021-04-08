// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { CartProvider } from 'src/contexts/CartContext'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/tshirts/new" page={AdminNewTshirtPage} name="adminNewTshirt" />
      <Route path="/admin/tshirts/{id:Int}/edit" page={AdminEditTshirtPage} name="adminEditTshirt" />
      <Route path="/admin/tshirts/{id:Int}" page={AdminTshirtPage} name="adminTshirt" />
      <Route path="/admin/tshirts" page={AdminTshirtsPage} name="adminTshirts" />
      <Route path="/admin/bands/new" page={AdminNewBandPage} name="newBand" />
      <Route path="/admin/bands/{id:Int}/edit" page={AdminEditBandPage} name="editBand" />
      <Route path="/admin/bands/{id:Int}" page={AdminBandPage} name="band" />
      <Route path="/admin/bands" page={AdminBandsPage} name="bands" />
      <Set wrap={[CartProvider, MainLayout]}>
        <Route path="/tshirts/{bandSlug}" page={TshirtsPage} name="tshirts" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
