import type { DocumentNode } from 'graphql/language'
import type { OperationVariables } from '@apollo/client'

import { contentClient } from 'lib/api/graphql/content'

export class BaseContentService {
  static async handleQuery<T>(
    query: DocumentNode,
    variables: OperationVariables | undefined = undefined
  ) {
    const response = await contentClient.query<T>({
      query,
      variables,
      fetchPolicy: 'network-only',
    })
    return response
  }
}
