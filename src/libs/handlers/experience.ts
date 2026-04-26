import type { Experiences } from '@libs/business/entity'
import { ExperienceUseCase } from '@libs/business/usecase'

export class ExperienceHandler {
  static async getExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceUseCase.getExperiences()
    if (!response) return undefined

    return response
  }

  static async getRecentExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceUseCase.getRecentExperiences()
    if (!response) return undefined

    return response
  }
}
