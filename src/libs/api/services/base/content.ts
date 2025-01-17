import { contentClient } from '@libs/api/graphql/content'

import type { AnyVariables } from '@urql/core'
import type { DocumentNode } from 'graphql/language'

export class BaseContentService {
  static async handleQuery<T>(
    query: DocumentNode,
    variables: AnyVariables | undefined = undefined
  ) {
    const response = await contentClient.query<T>(query, variables)
    return response
  }
}
