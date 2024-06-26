import { contentClient } from 'lib/api/graphql/content'
import { GET_EXPERIENCES } from 'lib/api/graphql/queries/experience'
import type { ExperiencesResponse } from 'lib/api/types/experience'

export class ExperienceService {
  static async getExperiences(): Promise<ExperiencesResponse> {
    const response = await contentClient.query<ExperiencesResponse>({
      query: GET_EXPERIENCES,
      variables: {
        orderBy: 'createdAt_DESC',
      },
    })
    return response.data
  }
}
