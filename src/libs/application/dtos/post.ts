export type CategorizedPosts = CategorizedPost[]

export interface CategorizedPost {
  category: string
  posts: Posts
}

export type Posts = Post[]

export interface Post {
  slug: string
  title: string
  category: string
  categorySlug: string
  coverImage: string
  date: string
  coverCaption: string
  excerpt: string
  content: any // change with MDX type
}

export type BlogCategories = BlogCategory[]

export interface BlogCategory {
  name: string
  slug: string
}
