import type { ProjectModel, ProjectsModel } from "@libs/business/entity";

import type { Tables } from "./client/database.types";
import { createServerClient } from "./client/supabase";

export class ProjectSupabaseRepository {
  static async getProjects(): Promise<ProjectsModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("project")
      .select("*")
      .order("starting_date", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    return data?.map(ProjectSupabaseRepository.mapToModel);
  }

  static async getFeaturedProjects(
    limit = 4,
  ): Promise<ProjectsModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("project")
      .select("*")
      .eq("is_featured", true)
      .order("starting_date", { ascending: false })
      .limit(limit);

    if (error) {
      console.error(error);
      return;
    }

    return data?.map(ProjectSupabaseRepository.mapToModel);
  }

  static async getProject(slug: string): Promise<ProjectModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("project")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    return ProjectSupabaseRepository.mapToModel(data);
  }

  private static mapToModel(data: Tables<"project">): ProjectModel {
    return {
      id: String(data.id),
      isFeatured: data.is_featured,
      name: data.name,
      slug: data.slug,
      image: data.image ?? undefined,
      projectType: data.project_type,
      startingDate: data.starting_date,
      endDate: data.end_date ?? undefined,
      role: data.role,
      excerpt: data.excerpt,
      overview: data.overview,
      techStack: data.tech_stack ?? [],
      responsibilities: data.responsibilities ?? [],
      url: data.url ?? undefined,
      sourceCode: data.source_code ?? undefined,
      company: data.company ?? undefined,
    };
  }
}
