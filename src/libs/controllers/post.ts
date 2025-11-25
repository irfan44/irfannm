import { PostService } from '@libs/api/services/post'
import type { CategorizedPostsModel, PostModel, PostsModel } from '@libs/models/post'

export class PostController {
  static async getPosts(): Promise<PostsModel | undefined> {
    const response = await PostService.getPosts()
    if (!response) return undefined

    return response.data
  }

  static async getCategorizedPosts(): Promise<CategorizedPostsModel | undefined> {
    const response = await PostService.getCategorizedPosts()
    if (!response) return undefined

    return response.data
  }

  static async getPost(slug: string): Promise<PostModel | undefined> {
    const response = await PostService.getPost(slug)
    if (!response) return undefined

    return response.data
  }

  static async getHighlightedPosts(): Promise<PostsModel | undefined> {
    const response = await PostService.getHighlightedPosts()
    if (!response) return undefined

    return response.data
  }

  static async getOtherPosts(category: string, slug: string): Promise<PostsModel | undefined> {
    const response = await PostService.getOtherPosts(category, slug)
    if (!response) return undefined

    return response.data
  }
}
