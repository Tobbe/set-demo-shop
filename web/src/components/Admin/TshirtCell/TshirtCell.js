import Tshirt from 'src/components/Admin/Tshirt'

export const QUERY = gql`
  query FIND_TSHIRT_BY_ID($id: Int!) {
    tshirt: tshirt(id: $id) {
      id
      image
      bandSlug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tshirt not found</div>

export const Success = ({ tshirt }) => {
  return <Tshirt tshirt={tshirt} />
}
