import { cacheExchange, Client, fetchExchange } from '@urql/core'

const contentUrl = process.env.CONTENT_API_URL || 'localhost:4000/graphql'
const isProduction = process.env.NODE_ENV === 'production'

export const contentClient = new Client({
  url: contentUrl,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: isProduction ? 'cache-and-network' : 'cache-first',
})
