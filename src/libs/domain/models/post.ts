export type CategorizedPostsModel = CategorizedPostModel[]

export interface CategorizedPostModel {
  category: string
  posts: PostsModel
}

export type PostsModel = PostModel[]

export interface PostModel {
  slug: string
  title: string
  category: string
  categorySlug: string
  coverImageUrl: string
  date: string
  caption: string
  excerpt: string
  content: any // change with MDX type
}

export type BlogCategoriesModel = BlogCategoryModel[]

export interface BlogCategoryModel {
  name: string
  slug: string
}
