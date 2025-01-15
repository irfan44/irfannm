import type { BlogCategoriesModel, PostsModel } from '@libs/models/post'

export interface PostsResponse {
  posts: PostsModel
}

export type CategorizedPostsResponse = PostsResponse & BlogCategoriesResponse

export interface PostResponse {
  posts: PostsModel
}

export interface BlogCategoriesResponse {
  blogCategories: BlogCategoriesModel
}
