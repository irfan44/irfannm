import { ExperienceService } from 'lib/api/services/experience'
import type { ExperiencesModel } from 'lib/models/experience'

export class ExperienceController {
  static async getExperiences(): Promise<ExperiencesModel | undefined> {
    const response = await ExperienceService.getExperiences()
    if (!response) return undefined

    return response.experiences
  }
}
