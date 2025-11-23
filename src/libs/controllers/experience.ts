import { ExperienceService } from '@libs/api/services/experience'
import type { ExperiencesModel } from '@libs/models/experience'

export class ExperienceController {
  static async getExperiences(): Promise<ExperiencesModel | undefined> {
    const response = await ExperienceService.getExperiences()
    if (!response) return undefined

    return response.data
  }

  static async getRecentExperiences(): Promise<ExperiencesModel | undefined> {
    const response = await ExperienceService.getRecentExperiences()
    if (!response) return undefined

    return response.data
  }
}
