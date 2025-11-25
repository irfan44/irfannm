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
  coverImageUrl: string
  date: string
  caption: string
  excerpt: string
  content: any // change with MDX type
}

export type BlogCategories = BlogCategory[]

export interface BlogCategory {
  name: string
  slug: string
}
