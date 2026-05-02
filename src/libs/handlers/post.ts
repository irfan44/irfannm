import { PostUseCase } from "@libs/business/usecase";

import type { CategorizedPosts, Post, Posts } from "@libs/business/entity";

export class PostHandler {
  static async getPosts(): Promise<Posts | undefined> {
    const response = await PostUseCase.getPosts();
    if (!response) return undefined;

    return response;
  }

  static async getCategorizedPosts(): Promise<CategorizedPosts | undefined> {
    const response = await PostUseCase.getCategorizedPosts();
    if (!response) return undefined;

    return response;
  }

  static async getPost(slug: string): Promise<Post | undefined> {
    const response = await PostUseCase.getPost(slug);
    if (!response) return undefined;

    return response;
  }

  static async getHighlightedPosts(): Promise<Posts | undefined> {
    const response = await PostUseCase.getHighlightedPosts();
    if (!response) return undefined;

    return response;
  }

  static async getOtherPosts(
    category: string,
    slug: string,
  ): Promise<Posts | undefined> {
    const response = await PostUseCase.getOtherPosts(category, slug);
    if (!response) return undefined;

    return response;
  }
}
