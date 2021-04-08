import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'

import MenuCell from 'src/components/MenuCell'

const MainLayout = ({ children }) => {
  const [items, setItems] = useState(0)

  const addItem = () => {
    setItems((items) => items + 1)
  }

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
        <main>{children(addItem)}</main>
      </div>
    </div>
  )
}

export default MainLayout
