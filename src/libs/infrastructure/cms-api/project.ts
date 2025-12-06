import type { ProjectModel, ProjectsModel } from '@libs/domain/models/project'
import { BaseCmsRepository } from '@libs/infrastructure/cms-api/base/cms'

export class ProjectCmsRepository {
  static async getProjects(): Promise<ProjectsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<ProjectsModel>('/projects')
    return response.data
  }

  static async getFeaturedProjects(limit = 4): Promise<ProjectsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<ProjectsModel>(
      `/projects/featured?limit=${limit}`
    )
    return response.data
  }

  static async getProject(slug: string): Promise<ProjectModel | undefined> {
    const response = await BaseCmsRepository.handleGet<ProjectModel>(`/projects/slug/${slug}`)
    return response.data
  }
}
