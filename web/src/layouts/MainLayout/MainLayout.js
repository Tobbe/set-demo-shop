import { Link, routes } from '@redwoodjs/router'

import MenuCell from 'src/components/MenuCell'
import { useCartItems } from 'src/contexts/CartContext'

const MainLayout = ({ children }) => {
  const items = useCartItems()

  return (
    <div className="main-layout">
      <header>
        <h1>Welcome to the merch shop</h1>
        <div className="cart">
          <span>🛒</span> {items}
        </div>
      </header>
      <div className="content">
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <MenuCell />
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
