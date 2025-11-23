import { BaseCmsService } from '@libs/api/services/base/cms'
import type { ExperiencesResponse } from '@libs/api/types/experience'

export class ExperienceService {
  static async getExperiences(): Promise<ExperiencesResponse | undefined> {
    const response = await BaseCmsService.handleGet<ExperiencesResponse>('/experiences')
    return response
  }

  static async getRecentExperiences(limit = 5): Promise<ExperiencesResponse | undefined> {
    const response = await BaseCmsService.handleGet<ExperiencesResponse>(
      `/experiences/recent?limit=${limit}`
    )
    return response
  }
}
