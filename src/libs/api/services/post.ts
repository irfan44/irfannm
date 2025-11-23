import {
  GET_CATEGORIZED_POSTS,
  GET_LEGACY_POST,
  GET_OTHER_POSTS,
  GET_POST,
  GET_POSTS,
} from '@libs/api/graphql/queries/post'
import type { CategorizedPostsResponse, PostResponse, PostsResponse } from '@libs/api/types/post'

import { BaseContentService } from './base/content'

export class PostService {
  static async getPosts(): Promise<PostsResponse | undefined> {
    const variables = {
      orderBy: 'date_DESC',
    }

    const response = await BaseContentService.handleQuery<PostsResponse>(GET_POSTS, variables)
    return response.data
  }

  static async getCategorizedPosts(): Promise<CategorizedPostsResponse | undefined> {
    const variables = {
      orderBy: 'date_DESC',
    }

    const response = await BaseContentService.handleQuery<CategorizedPostsResponse>(
      GET_CATEGORIZED_POSTS,
      variables
    )
    return response.data
  }

  static async getPost(slug: string): Promise<PostResponse | undefined> {
    const variables = {
      slug,
    }

    const response = await BaseContentService.handleQuery<PostResponse>(GET_POST, variables)
    return response.data
  }

  static async getLegacyPost(legacySlug: string): Promise<PostResponse | undefined> {
    const variables = {
      legacySlug,
    }

    const response = await BaseContentService.handleQuery<PostResponse>(GET_LEGACY_POST, variables)
    return response.data
  }

  static async getHighlightedPosts(): Promise<PostsResponse | undefined> {
    const variables = {
      orderBy: 'date_DESC',
      first: 2,
    }

    const response = await BaseContentService.handleQuery<PostsResponse>(GET_POSTS, variables)
    return response.data
  }

  static async getOtherPosts(category: string, slug: string): Promise<PostsResponse | undefined> {
    const variables = {
      orderBy: 'date_DESC',
      first: 2,
      category,
      slug,
    }

    const response = await BaseContentService.handleQuery<PostsResponse>(GET_OTHER_POSTS, variables)
    return response.data
  }
}
