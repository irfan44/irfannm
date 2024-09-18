import { GET_CONSTANT, GET_CONSTANTS } from 'lib/api/graphql/queries/constant'
import type {
  ConstantResponse,
  ConstantsResponse,
} from 'lib/api/types/constant'

import { BaseContentService } from './base/content'

export class ConstantService {
  static async getConstants(): Promise<ConstantsResponse> {
    const response =
      await BaseContentService.handleQuery<ConstantsResponse>(GET_CONSTANTS)
    return response.data
  }

  static async getConstant(slug: string): Promise<ConstantResponse> {
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
