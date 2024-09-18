import { cacheExchange, Client, fetchExchange } from '@urql/core'

const contentUrl = process.env.CONTENT_API_URL || 'localhost:4000/graphql'
export const contentClient = new Client({
  url: contentUrl,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: 'cache-and-network',
})
