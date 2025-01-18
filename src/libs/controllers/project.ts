import { ProjectService } from '@libs/api/services/project'

import type { ProjectModel, ProjectsModel } from '@libs/models/project'

export class ProjectController {
  static async getProjects(): Promise<ProjectsModel | undefined> {
    const response = await ProjectService.getProjects()
    if (!response) return undefined

    return response.projects
  }

  static async getFeaturedProjects(): Promise<ProjectsModel | undefined> {
    const response = await ProjectService.getFeaturedProjects()
    if (!response) return undefined

    return response.projects
  }

  static async getProject(slug: string): Promise<ProjectModel | undefined> {
    const response = await ProjectService.getProject(slug)
    if (!response) return undefined

    const project = response.projects[0]
    return project
  }
}
