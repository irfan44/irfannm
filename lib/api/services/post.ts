import { contentClient } from 'lib/api/graphql/content'
import {
  GET_CATEGORIZED_POSTS,
  GET_LEGACY_POST,
  GET_POST,
  GET_POSTS,
} from 'lib/api/graphql/queries/post'
import type {
  CategorizedPostsResponse,
  PostResponse,
  PostsResponse,
} from 'lib/api/types/post'

export class PostService {
  static async getCategorizedPosts(): Promise<CategorizedPostsResponse> {
    const response = await contentClient.query<CategorizedPostsResponse>({
      query: GET_CATEGORIZED_POSTS,
      variables: {
        orderBy: 'date_DESC',
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }

  static async getPost(slug: string): Promise<PostResponse> {
    const response = await contentClient.query<PostResponse>({
      query: GET_POST,
      variables: {
        slug,
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }

  static async getLegacyPost(legacySlug: string): Promise<PostResponse> {
    const response = await contentClient.query<PostResponse>({
      query: GET_LEGACY_POST,
      variables: {
        legacySlug,
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }

  static async getHighlightedPosts(): Promise<PostsResponse> {
    const response = await contentClient.query<PostsResponse>({
      query: GET_POSTS,
      variables: {
        orderBy: 'date_DESC',
        first: 2,
      },
      fetchPolicy: 'network-only',
    })
    return response.data
  }
}
