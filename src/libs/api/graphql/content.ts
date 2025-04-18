import { Client, cacheExchange, fetchExchange } from '@urql/core'

const contentUrl = import.meta.env.CONTENT_API_URL || 'localhost:4000/graphql'
const isProduction = import.meta.env.NODE_ENV === 'production'

export const contentClient = new Client({
  url: contentUrl,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: isProduction ? 'cache-and-network' : 'cache-first',
})
