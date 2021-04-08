import Band from 'src/components/Admin/Band'

export const QUERY = gql`
  query FIND_BAND_BY_ID($id: Int!) {
    band: band(id: $id) {
      id
      slug
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Band not found</div>

export const Success = ({ band }) => {
  return <Band band={band} />
}
