import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface AllPostsModel {
  allPosts: PostsModel
}

export type PostsModel = PostModel[]

export interface PostModel {
  slug: string
  title: string
  category: string
  date: string
  coverImage: {
    url: string
  }
  caption: string
  excerpt: string
  content: MDXRemoteSerializeResult
}
