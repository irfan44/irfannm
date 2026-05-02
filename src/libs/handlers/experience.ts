import { ExperienceUseCase } from "@libs/business/usecase";

import type { Experiences } from "@libs/business/entity";

export class ExperienceHandler {
  static async getExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceUseCase.getExperiences();
    if (!response) return undefined;

    return response;
  }

  static async getRecentExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceUseCase.getRecentExperiences();
    if (!response) return undefined;

    return response;
  }
}
