import { contentClient } from 'lib/api/graphql/content'
import { GET_CONSTANT, GET_CONSTANTS } from 'lib/api/graphql/queries/constant'
import type {
  ConstantResponse,
  ConstantsResponse,
} from 'lib/api/types/constant'

export class ConstantService {
  static async getConstants(): Promise<ConstantsResponse> {
    const response = await contentClient.query<ConstantsResponse>({
      query: GET_CONSTANTS,
    })
    return response.data
  }

  static async getConstant(slug: string): Promise<ConstantResponse> {
    const response = await contentClient.query<ConstantResponse>({
      query: GET_CONSTANT,
      variables: {
        slug,
      },
    })
    return response.data
  }
}
