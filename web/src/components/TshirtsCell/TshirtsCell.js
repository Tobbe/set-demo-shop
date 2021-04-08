import { useCartAddItem } from "src/contexts/CartContext"

export const QUERY = gql`
  query TshirtsQuery($bandSlug: String!) {
    tshirts: tshirts(bandSlug: $bandSlug) {
      id
      image
    }
    band: bandFromSlug(bandSlug: $bandSlug) {
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tshirts, band }) => {
  const addItem = useCartAddItem()

  return (
    <div className="tshirts-page">
      <h1>{band.name}</h1>
      <p>Click any shirt to add to your cart</p>
      {tshirts.map(tshirt => (
        <img src={tshirt.image} onClick={addItem} key={tshirt.id} />
      ))}
    </div>
  )
}
