import { Link, routes } from '@redwoodjs/router'

import Bands from 'src/components/Admin/Bands'

export const QUERY = gql`
  query BANDS {
    bands {
      id
      slug
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bands yet. '}
      <Link to={routes.newBand()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ bands }) => {
  return <Bands bands={bands} />
}
