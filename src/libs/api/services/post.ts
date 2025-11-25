import { BaseCmsService } from '@libs/api/services/base/cms'
import type { CategorizedPostsResponse, PostResponse, PostsResponse } from '@libs/api/types/post'

export class PostService {
  static async getPosts(): Promise<PostsResponse | undefined> {
    const response = await BaseCmsService.handleGet<PostsResponse>('/posts')
    return response
  }

  static async getCategorizedPosts(): Promise<CategorizedPostsResponse | undefined> {
    const response = await BaseCmsService.handleGet<CategorizedPostsResponse>('/posts/categorized')
    return response
  }

  static async getPost(slug: string): Promise<PostResponse | undefined> {
    const response = await BaseCmsService.handleGet<PostResponse>(`/posts/${slug}`)
    return response
  }

  static async getHighlightedPosts(): Promise<PostsResponse | undefined> {
    const response = await BaseCmsService.handleGet<PostsResponse>('/posts/highlighted')
    return response
  }

  static async getOtherPosts(category: string, slug: string): Promise<PostsResponse | undefined> {
    const response = await BaseCmsService.handleGet<PostsResponse>(
      `/posts/${category}/${slug}/others`
    )
    return response
  }
}
