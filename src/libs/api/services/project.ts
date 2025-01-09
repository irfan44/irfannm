import {
  GET_FEATURED_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS,
} from '@libs/api/graphql/queries/project'
import type { ProjectResponse, ProjectsResponse } from '@libs/api/types/project'

import { BaseContentService } from './base/content'

export class ProjectService {
  static async getProjects(): Promise<ProjectsResponse | undefined> {
    const variables = {
      orderBy: 'startingDate_DESC',
    }

    const response = await BaseContentService.handleQuery<ProjectsResponse>(
      GET_PROJECTS,
      variables
    )
    return response.data
  }

  static async getFeaturedProjects(): Promise<ProjectsResponse | undefined> {
    const variables = {
      isFeatured: true,
      orderBy: 'startingDate_DESC',
      first: 4,
    }

    const response = await BaseContentService.handleQuery<ProjectsResponse>(
      GET_FEATURED_PROJECTS,
      variables
    )
    return response.data
  }

  static async getProject(slug: string): Promise<ProjectResponse | undefined> {
    const variables = {
      slug,
    }

    const response = await BaseContentService.handleQuery<ProjectResponse>(
      GET_PROJECT,
      variables
    )
    return response.data
  }
}
