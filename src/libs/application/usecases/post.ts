import type { CategorizedPosts, Post, Posts } from '@libs/application/dtos/post'
import { PostCmsRepository } from '@libs/infrastructure/cms-api/post'

export class PostUseCase {
  static async getPosts(): Promise<Posts | undefined> {
    const response = await PostCmsRepository.getPosts()
    if (!response) return undefined

    return response
  }

  static async getCategorizedPosts(): Promise<CategorizedPosts | undefined> {
    const response = await PostCmsRepository.getCategorizedPosts()
    if (!response) return undefined

    return response
  }

  static async getPost(slug: string): Promise<Post | undefined> {
    const response = await PostCmsRepository.getPost(slug)
    if (!response) return undefined

    return response
  }

  static async getHighlightedPosts(): Promise<Posts | undefined> {
    const response = await PostCmsRepository.getHighlightedPosts()
    if (!response) return undefined

    return response
  }

  static async getOtherPosts(category: string, slug: string): Promise<Posts | undefined> {
    const response = await PostCmsRepository.getOtherPosts(category, slug)
    if (!response) return undefined

    return response
  }
}
