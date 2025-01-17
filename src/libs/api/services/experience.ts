import { GET_EXPERIENCES, GET_RECENT_EXPERIENCES } from '@libs/api/graphql/queries/experience'

import { BaseContentService } from './base/content'

import type { ExperiencesResponse } from '@libs/api/types/experience'

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

  static async getRecentExperiences(): Promise<ExperiencesResponse | undefined> {
    const variables = {
      orderBy: 'startingDate_DESC',
      first: 5,
    }

    const response = await BaseContentService.handleQuery<ExperiencesResponse>(
      GET_RECENT_EXPERIENCES,
      variables
    )
    return response.data
  }
}
