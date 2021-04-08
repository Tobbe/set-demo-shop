export const schema = gql`
  type Tshirt {
    id: Int!
    image: String!
    bandSlug: String!
  }

  type Query {
    tshirts(bandSlug: String): [Tshirt]!
    tshirt(id: Int!): Tshirt
  }

  input CreateTshirtInput {
    image: String!
    bandSlug: String!
  }

  input UpdateTshirtInput {
    image: String
    bandSlug: String
  }

  type Mutation {
    createTshirt(input: CreateTshirtInput!): Tshirt!
    updateTshirt(id: Int!, input: UpdateTshirtInput!): Tshirt!
    deleteTshirt(id: Int!): Tshirt!
  }
`
