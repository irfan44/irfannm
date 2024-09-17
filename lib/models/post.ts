import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface AllPostsModel {
  allPosts: PostsModel
}

export type PostsModel = PostModel[]

export interface PostModel {
  slug: string
  title: string
  category: string
  blogCategory: BlogCategoryModel
  date: string
  coverImage: {
    secure_url: string
  }
  caption: string
  excerpt: string
  content: MDXRemoteSerializeResult
}

export type BlogCategoriesModel = BlogCategoryModel[]

export interface BlogCategoryModel {
  name: string
  slug: string
}
