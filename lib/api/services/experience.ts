import { GET_EXPERIENCES } from 'lib/api/graphql/queries/experience'
import type { ExperiencesResponse } from 'lib/api/types/experience'

import { BaseContentService } from './base/content'

export class ExperienceService {
  static async getExperiences(): Promise<ExperiencesResponse | undefined> {
    const variables = {
      orderBy: 'startingDate_DESC',
    }

    const response = await BaseContentService.handleQuery<ExperiencesResponse>(
      GET_EXPERIENCES,
      variables
    )
    return response.data
  }

  static async getRecentExperiences(): Promise<
    ExperiencesResponse | undefined
  > {
    const variables = {
      orderBy: 'startingDate_DESC',
      first: 5,
    }

    const response = await BaseContentService.handleQuery<ExperiencesResponse>(
      GET_EXPERIENCES,
      variables
    )
    return response.data
  }
}
