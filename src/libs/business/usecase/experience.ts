import type { Experiences } from "@libs/business/entity";
import { ExperienceSupabaseRepository } from "@libs/business/repository";

export class ExperienceUseCase {
  static async getExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceSupabaseRepository.getExperiences();
    if (!response) return undefined;

    return response;
  }

  static async getRecentExperiences(): Promise<Experiences | undefined> {
    const response = await ExperienceSupabaseRepository.getRecentExperiences();
    if (!response) return undefined;

    return response;
  }
}
