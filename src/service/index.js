import { ApolloClient, InMemoryCache } from "@apollo/client"


const client = new ApolloClient(
  {
    uri: "https://api-sa-east-1.graphcms.com/v2/cl55m19fp3ifd01upb8hgdqv3/master",
    cache: new InMemoryCache(),
  }
)

export default client;