import { Link } from '@redwoodjs/router'

export const QUERY = gql`
  query MenuQuery {
    bands {
      slug
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ bands }) => {
  return bands.map((band) => (
    <li key={band.slug}>
      <Link to={`/tshirts/${band.slug}`}>{band.name}</Link>
    </li>
  ))
}
