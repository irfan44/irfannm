import { PostSupabaseRepository } from "@libs/business/repository";

import type { CategorizedPosts, Post, Posts } from "@libs/business/entity";

export class PostUseCase {
  static async getPosts(): Promise<Posts | undefined> {
    const response = await PostSupabaseRepository.getPosts();
    if (!response) return undefined;

    return response;
  }

  static async getCategorizedPosts(): Promise<CategorizedPosts | undefined> {
    const response = await PostSupabaseRepository.getCategorizedPosts();
    if (!response) return undefined;

    return response;
  }

  static async getPost(slug: string): Promise<Post | undefined> {
    const response = await PostSupabaseRepository.getPost(slug);
    if (!response) return undefined;

    return response;
  }

  static async getHighlightedPosts(): Promise<Posts | undefined> {
    const response = await PostSupabaseRepository.getHighlightedPosts();
    if (!response) return undefined;

    return response;
  }

  static async getOtherPosts(
    category: string,
    slug: string,
  ): Promise<Posts | undefined> {
    const response = await PostSupabaseRepository.getOtherPosts(category, slug);
    if (!response) return undefined;

    return response;
  }
}
