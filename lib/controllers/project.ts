import { ProjectService } from 'lib/api/services/project'
import type { ProjectsModel } from 'lib/models/project'

export class ProjectController {
  static async getProjects(): Promise<ProjectsModel> {
    const response = await ProjectService.getProjects()
    return response.projects
  }

  static async getFeaturedProjects(): Promise<ProjectsModel> {
    const response = await ProjectService.getFeaturedProjects()
    return response.projects
  }
}
