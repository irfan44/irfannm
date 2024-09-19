import { ProjectService } from 'lib/api/services/project'
import type { ProjectsModel } from 'lib/models/project'

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
}
