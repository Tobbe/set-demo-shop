import { Link, routes } from '@redwoodjs/router'

import Tshirts from 'src/components/Admin/Tshirts'

export const QUERY = gql`
  query TSHIRTS {
    tshirts {
      id
      image
      bandSlug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tshirts yet. '}
      <Link to={routes.adminNewTshirt()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tshirts }) => {
  return <Tshirts tshirts={tshirts} />
}
