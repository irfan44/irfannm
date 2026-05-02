import { createServerClient } from "./client/supabase";

import type { Tables } from "./client/database.types";
import type { ExperienceModel, ExperiencesModel } from "@libs/business/entity";

export class ExperienceSupabaseRepository {
  static async getExperiences(): Promise<ExperiencesModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("experience")
      .select("*")
      .order("starting_date", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    return data?.map(ExperienceSupabaseRepository.mapToModel);
  }

  static async getRecentExperiences(
    limit = 5,
  ): Promise<ExperiencesModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("experience")
      .select("*")
      .order("starting_date", { ascending: false })
      .limit(limit);

    if (error) {
      console.error(error);
      return;
    }

    return data?.map(ExperienceSupabaseRepository.mapToModel);
  }

  private static mapToModel(data: Tables<"experience">): ExperienceModel {
    return {
      id: String(data.id),
      title: data.title,
      company: data.company,
      companyLogo: data.company_logo,
      employmentType: data.employment_type,
      startingDate: data.starting_date,
      responsibilities: data.responsibilities ?? undefined,
      endDate: data.end_date ?? undefined,
    };
  }
}
