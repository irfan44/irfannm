import type { BlogCategoriesModel, PostsModel } from 'lib/models/post'

export interface PostsResponse {
  posts: PostsModel
}

export interface PostResponse {
  posts: PostsModel
}

export interface BlogCategoriesResponse {
  blogCategories: BlogCategoriesModel
}
