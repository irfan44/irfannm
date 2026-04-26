import type { ExperiencesModel } from '@libs/business/entity'

import { BaseCmsRepository } from './base/cms'

export class ExperienceCmsRepository {
  static async getExperiences(): Promise<ExperiencesModel | undefined> {
    const response = await BaseCmsRepository.handleGet<ExperiencesModel>('/experiences')
    return response.data
  }

  static async getRecentExperiences(limit = 5): Promise<ExperiencesModel | undefined> {
    const response = await BaseCmsRepository.handleGet<ExperiencesModel>(
      `/experiences/recent?limit=${limit}`
    )
    return response.data
  }
}
