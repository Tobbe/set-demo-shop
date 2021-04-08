export const schema = gql`
  type Band {
    id: Int!
    slug: String!
    name: String!
  }

  type Query {
    bands: [Band!]!
    band(id: Int!): Band
    bandFromSlug(bandSlug: String!): Band
  }

  input CreateBandInput {
    slug: String!
    name: String!
  }

  input UpdateBandInput {
    slug: String
    name: String
  }

  type Mutation {
    createBand(input: CreateBandInput!): Band!
    updateBand(id: Int!, input: UpdateBandInput!): Band!
    deleteBand(id: Int!): Band!
  }
`
