import { PostService } from 'lib/api/services/post'
import type {
  CategorizedPostsModel,
  PostModel,
  PostsModel,
} from 'lib/models/post'

export class PostController {
  static async getPosts(): Promise<PostsModel | undefined> {
    const response = await PostService.getPosts()
    if (!response) return undefined

    return response.posts
  }

  static async getCategorizedPosts(): Promise<
    CategorizedPostsModel | undefined
  > {
    const response = await PostService.getCategorizedPosts()
    if (!response) return undefined

    const categories = response.blogCategories
    const posts = response.posts

    const postsByCategory = posts.reduce((acc: any, post) => {
      const { slug } = post.blogCategory
      if (!acc[slug]) {
        acc[slug] = []
      }
      acc[slug].push(post)
      return acc
    }, {})

    const categorizedPosts = categories.map((category) => ({
      category: category.name,
      posts: postsByCategory[category.slug] || [],
    }))

    categorizedPosts.push({ category: 'All', posts })

    categorizedPosts.sort((a, b) => b.posts.length - a.posts.length)

    return categorizedPosts
  }

  static async getPost(slug: string): Promise<PostModel | undefined> {
    const response = await PostService.getPost(slug)
    if (!response) return undefined

    const post = response.posts[0]
    return post
  }

  static async getLegacyPost(
    legacySlug: string
  ): Promise<PostModel | undefined> {
    const response = await PostService.getLegacyPost(legacySlug)
    if (!response) return undefined

    const post = response.posts[0]
    return post
  }

  static async getHighlightedPosts(): Promise<PostsModel | undefined> {
    const response = await PostService.getHighlightedPosts()
    if (!response) return undefined

    return response.posts
  }

  static async getOtherPosts(
    category: string,
    slug: string
  ): Promise<PostsModel | undefined> {
    const response = await PostService.getOtherPosts(category, slug)
    if (!response) return undefined

    return response.posts
  }
}
