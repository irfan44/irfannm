import { BaseCmsService } from '@libs/api/services/base/cms.ts'
import type { ProjectResponse, ProjectsResponse } from '@libs/api/types/project'

export class ProjectService {
  static async getProjects(): Promise<ProjectsResponse | undefined> {
    const response = await BaseCmsService.handleGet<ProjectsResponse>('/projects')
    return response
  }

  static async getFeaturedProjects(limit = 4): Promise<ProjectsResponse | undefined> {
    const response = await BaseCmsService.handleGet<ProjectsResponse>(
      `/projects/featured?limit=${limit}`
    )
    return response
  }

  static async getProject(slug: string): Promise<ProjectResponse | undefined> {
    const response = await BaseCmsService.handleGet<ProjectResponse>(`/projects/${slug}`)
    return response
  }
}
