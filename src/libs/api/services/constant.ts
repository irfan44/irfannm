import { GET_CONSTANT, GET_CONSTANTS } from '@libs/api/graphql/queries/constant'
import type {
  ConstantResponse,
  ConstantsResponse,
} from '@libs/api/types/constant'

import { BaseContentService } from './base/content'

export class ConstantService {
  static async getConstants(): Promise<ConstantsResponse | undefined> {
    const response =
      await BaseContentService.handleQuery<ConstantsResponse>(GET_CONSTANTS)
    return response.data
  }

  static async getConstant(
    slug: string
  ): Promise<ConstantResponse | undefined> {
    const variables = {
      slug,
    }

    const response = await BaseContentService.handleQuery<ConstantResponse>(
      GET_CONSTANT,
      variables
    )
    return response.data
  }
}
