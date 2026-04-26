import type { Project, Projects } from '@libs/business/entity'
import { ProjectUseCase } from '@libs/business/usecase'

export class ProjectHandler {
  static async getProjects(): Promise<Projects | undefined> {
    const response = await ProjectUseCase.getProjects()
    if (!response) return undefined

    return response
  }

  static async getFeaturedProjects(): Promise<Projects | undefined> {
    const response = await ProjectUseCase.getFeaturedProjects()
    if (!response) return undefined

    return response
  }

  static async getProject(slug: string): Promise<Project | undefined> {
    const response = await ProjectUseCase.getProject(slug)
    if (!response) return undefined

    return response
  }
}
