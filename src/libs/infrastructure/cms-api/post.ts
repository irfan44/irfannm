import type { CategorizedPostsModel, PostModel, PostsModel } from '@libs/domain/models/post'
import { BaseCmsRepository } from '@libs/infrastructure/cms-api/base/cms'

export class PostCmsRepository {
  static async getPosts(): Promise<PostsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<PostsModel>('/posts')
    return response.data
  }

  static async getCategorizedPosts(): Promise<CategorizedPostsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<CategorizedPostsModel>('/posts/categorized')
    return response.data
  }

  static async getPost(slug: string): Promise<PostModel | undefined> {
    const response = await BaseCmsRepository.handleGet<PostModel>(`/posts/slug/${slug}`)
    return response.data
  }

  static async getHighlightedPosts(): Promise<PostsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<PostsModel>('/posts/highlighted')
    return response.data
  }

  static async getOtherPosts(category: string, slug: string): Promise<PostsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<PostsModel>(
      `/posts/${category}/${slug}/others`
    )
    return response.data
  }
}
