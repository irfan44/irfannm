import { ApolloClient, InMemoryCache } from '@apollo/client'

const contentUrl = process.env.CONTENT_API_URL || 'localhost:4000/graphql'
export const contentClient = new ApolloClient({
  uri: contentUrl,
  cache: new InMemoryCache(),
})
