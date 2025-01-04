import {
  GET_FEATURED_PROJECTS,
  GET_PROJECTS,
} from '@libs/api/graphql/queries/project'
import type { ProjectsResponse } from '@libs/api/types/project'

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
      first: 5,
    }

    const response = await BaseContentService.handleQuery<ProjectsResponse>(
      GET_FEATURED_PROJECTS,
      variables
    )
    return response.data
  }
}
