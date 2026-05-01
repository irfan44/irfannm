import type { Project, Projects } from "@libs/business/entity";
import { ProjectSupabaseRepository } from "@libs/business/repository";

export class ProjectUseCase {
  static async getProjects(): Promise<Projects | undefined> {
    const response = await ProjectSupabaseRepository.getProjects();
    if (!response) return undefined;

    return response;
  }

  static async getFeaturedProjects(): Promise<Projects | undefined> {
    const response = await ProjectSupabaseRepository.getFeaturedProjects();
    if (!response) return undefined;

    return response;
  }

  static async getProject(slug: string): Promise<Project | undefined> {
    const response = await ProjectSupabaseRepository.getProject(slug);
    if (!response) return undefined;

    return response;
  }
}
