import type { Experiences } from '@libs/application/dtos/experience'
import { ExperienceCmsRepository } from '@libs/infrastructure/cms-api/experience'

export class ExperienceUseCase {
  static async getExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceCmsRepository.getExperiences()
    if (!response) return undefined

    return response
  }

  static async getRecentExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceCmsRepository.getRecentExperiences()
    if (!response) return undefined

    return response
  }
}
