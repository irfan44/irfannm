import { contentClient } from 'lib/api/graphql/content'
import {
  GET_BLOG_CATEGORIES,
  GET_LEGACY_POST,
  GET_POST,
  GET_POSTS,
} from 'lib/api/graphql/queries/post'
import type {
  BlogCategoriesResponse,
  PostResponse,
  PostsResponse,
} from 'lib/api/types/post'

export class PostService {
  static async getPosts(): Promise<PostsResponse> {
    const response = await contentClient.query<PostsResponse>({
      query: GET_POSTS,
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

  static async getBlogCategories(): Promise<BlogCategoriesResponse> {
    const response = await contentClient.query<BlogCategoriesResponse>({
      query: GET_BLOG_CATEGORIES,
      fetchPolicy: 'network-only',
    })
    return response.data
  }
}
