import { PostService } from 'lib/api/services/post'
import type { PostModel, PostsModel } from 'lib/models/post'

export class PostController {
  static async getPosts(): Promise<PostsModel> {
    const response = await PostService.getPosts()
    return response.posts
  }

  static async getPost(slug: string): Promise<PostModel> {
    const response = await PostService.getPost(slug)
    const post = response.posts[0]
    return post
  }

  static async getHighlightedPosts(): Promise<PostsModel> {
    const response = await PostService.getHighlightedPosts()
    return response.posts
  }
}
