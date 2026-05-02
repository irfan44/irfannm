import { createServerClient } from "./client/supabase";

import type {
  BlogCategoryModel,
  CategorizedPostsModel,
  PostModel,
  PostsModel,
} from "@libs/business/entity";

type PostCategoryRow = {
  name: string;
  slug: string;
};

type PostWithCategoryRow = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
  cover_caption?: string | null;
  content?: string;
  created_at: string;
  post_category: PostCategoryRow;
};

export class PostSupabaseRepository {
  static async getPosts(): Promise<PostsModel | undefined> {
    const data = await PostSupabaseRepository.fetchPosts();
    return data?.map((row) => PostSupabaseRepository.mapToModel(row));
  }

  static async getCategorizedPosts(): Promise<
    CategorizedPostsModel | undefined
  > {
    const [posts, categories] = await Promise.all([
      PostSupabaseRepository.fetchPosts(),
      PostSupabaseRepository.fetchCategories(),
    ]);

    if (!posts || !categories) return undefined;

    const postsByCategorySlug = new Map<string, PostsModel>();

    for (const row of posts) {
      const post = PostSupabaseRepository.mapToModel(row);
      const categorizedPosts =
        postsByCategorySlug.get(row.post_category.slug) ?? [];

      categorizedPosts.push(post);
      postsByCategorySlug.set(row.post_category.slug, categorizedPosts);
    }

    const allPosts = posts
      .map((row) => PostSupabaseRepository.mapToModel(row))
      .sort((a, b) => b.date.localeCompare(a.date));

    const categorized = categories.map((category) => ({
      category: category.name,
      posts: postsByCategorySlug.get(category.slug) ?? [],
    }));

    if (allPosts.length > 0) {
      categorized.push({
        category: "All",
        posts: allPosts,
      });
    }

    categorized.sort((a, b) => b.posts.length - a.posts.length);

    return categorized;
  }

  static async getHighlightedPosts(): Promise<PostsModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("post")
      .select(
        "slug, title, date, excerpt, cover_image, created_at, post_category!inner(name, slug)",
      )
      .order("date", { ascending: false })
      .limit(2);

    if (error) {
      console.error(error);
      return;
    }

    return (data as PostWithCategoryRow[]).map((row) =>
      PostSupabaseRepository.mapToModel(row),
    );
  }

  static async getOtherPosts(
    category: string,
    slug: string,
  ): Promise<PostsModel | undefined> {
    const supabase = createServerClient();

    const { data: postCategory, error: categoryError } = await supabase
      .from("post_category")
      .select("id")
      .eq("slug", category)
      .single();

    if (categoryError) {
      console.error(categoryError);
      return;
    }

    const { data, error } = await supabase
      .from("post")
      .select(
        "slug, title, date, excerpt, cover_image, created_at, post_category!inner(name, slug)",
      )
      .neq("slug", slug)
      .eq("category", postCategory.id)
      .order("date", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    return (data as PostWithCategoryRow[]).map((row) =>
      PostSupabaseRepository.mapToModel(row),
    );
  }

  static async getPost(slug: string): Promise<PostModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("post")
      .select(
        "slug, title, date, excerpt, cover_image, cover_caption, content, created_at, post_category!inner(name, slug)",
      )
      .eq("slug", slug)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    return PostSupabaseRepository.mapToModel(data as PostWithCategoryRow);
  }

  private static async fetchPosts(): Promise<
    PostWithCategoryRow[] | undefined
  > {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("post")
      .select(
        "slug, title, date, excerpt, cover_image, created_at, post_category!inner(name, slug)",
      )
      .order("date", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    return data as PostWithCategoryRow[];
  }

  private static async fetchCategories(): Promise<
    BlogCategoryModel[] | undefined
  > {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("post_category")
      .select("name, slug");

    if (error) {
      console.error(error);
      return;
    }

    return data;
  }

  private static mapToModel(data: PostWithCategoryRow): PostModel {
    return {
      slug: data.slug,
      title: data.title,
      category: data.post_category.name,
      categorySlug: data.post_category.slug,
      coverImage: data.cover_image,
      date: data.date,
      coverCaption: data.cover_caption ?? "",
      excerpt: data.excerpt,
      content: data.content ?? "",
    };
  }
}
