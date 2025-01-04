import type { DocumentNode } from 'graphql/language'
import type { AnyVariables } from '@urql/core'

import { contentClient } from '@libs/api/graphql/content'

export class BaseContentService {
  static async handleQuery<T>(
    query: DocumentNode,
    variables: AnyVariables | undefined = undefined
  ) {
    const response = await contentClient.query<T>(query, variables)
    return response
  }
}
