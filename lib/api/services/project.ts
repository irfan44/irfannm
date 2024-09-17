import { contentClient } from 'lib/api/graphql/content'
import {
  GET_FEATURED_PROJECTS,
  GET_PROJECTS,
} from 'lib/api/graphql/queries/project'
import type { ProjectsResponse } from 'lib/api/types/project'

export class ProjectService {
  static async getProjects(): Promise<ProjectsResponse> {
    const response = await contentClient.query<ProjectsResponse>({
      query: GET_PROJECTS,
      variables: {
        orderBy: 'startingDate_DESC',
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }

  static async getFeaturedProjects(): Promise<ProjectsResponse> {
    const response = await contentClient.query<ProjectsResponse>({
      query: GET_FEATURED_PROJECTS,
      variables: {
        isFeatured: true,
        orderBy: 'startingDate_DESC',
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }
}
