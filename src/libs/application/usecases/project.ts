import type { Project, Projects } from '@libs/application/dtos/project'
import { ProjectCmsRepository } from '@libs/infrastructure/persistance/cms-api/project'

export class ProjectUseCase {
  static async getProjects(): Promise<Projects | undefined> {
    const response = await ProjectCmsRepository.getProjects()
    if (!response) return undefined

    return response
  }

  static async getFeaturedProjects(): Promise<Projects | undefined> {
    const response = await ProjectCmsRepository.getFeaturedProjects()
    if (!response) return undefined

    return response
  }

  static async getProject(slug: string): Promise<Project | undefined> {
    const response = await ProjectCmsRepository.getProject(slug)
    if (!response) return undefined

    return response
  }
}
