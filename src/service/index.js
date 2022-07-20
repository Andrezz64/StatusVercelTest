import { ApolloClient, InMemoryCache } from "@apollo/client"

const apiSecret = process.env.GRAPHQL
const client = new ApolloClient(
  {
    uri: `https://api-sa-east-1.graphcms.com/v2/${apiSecret}/master`,
    cache: new InMemoryCache(),
  }
)

export default client;