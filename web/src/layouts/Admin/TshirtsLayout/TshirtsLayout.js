import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TshirtsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminTshirts()} className="rw-link">
            Tshirts
          </Link>
        </h1>
        <Link
          to={routes.adminNewTshirt()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Tshirt
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default TshirtsLayout
