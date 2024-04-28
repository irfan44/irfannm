import { contentClient } from 'lib/api/graphql/content'
import { GET_POST, GET_POSTS } from 'lib/api/graphql/query/post'
import type { PostResponse, PostsResponse } from 'lib/api/types/post'

export class PostService {
  static async getPosts(): Promise<PostsResponse> {
    const response = await contentClient.query<PostsResponse>({
      query: GET_POSTS,
      variables: {
        orderBy: 'publishedAt_DESC',
      },
    })
    return response.data
  }

  static async getPost(slug: string): Promise<PostResponse> {
    const response = await contentClient.query<PostResponse>({
      query: GET_POST,
      variables: {
        slug,
      },
    })
    return response.data
  }

  static async getHighlightedPosts(): Promise<PostsResponse> {
    const response = await contentClient.query<PostsResponse>({
      query: GET_POSTS,
      variables: {
        orderBy: 'publishedAt_DESC',
        first: 2,
      },
    })
    return response.data
  }
}
