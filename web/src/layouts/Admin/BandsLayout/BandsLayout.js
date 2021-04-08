import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const BandsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.bands()} className="rw-link">
            Bands
          </Link>
        </h1>
        <Link to={routes.newBand()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Band
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default BandsLayout
