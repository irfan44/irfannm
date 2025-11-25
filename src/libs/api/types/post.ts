import type { BaseCmsResponse } from '@libs/api/types/cms'
import type {
  BlogCategoriesModel,
  CategorizedPostsModel,
  PostModel,
  PostsModel,
} from '@libs/models/post'

export type PostsResponse = BaseCmsResponse<PostsModel>

export type CategorizedPostsResponse = BaseCmsResponse<CategorizedPostsModel>

export type PostResponse = BaseCmsResponse<PostModel>

export type BlogCategoriesResponse = BaseCmsResponse<BlogCategoriesModel>
