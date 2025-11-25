import type { Experiences } from '@libs/application/dtos/experience'
import { ExperienceUseCase } from '@libs/application/usecases/experience'

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
