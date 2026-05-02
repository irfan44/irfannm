import { createServerClient } from "./client/supabase";

import type { Tables } from "./client/database.types";
import type {
  SiteContentModel,
  SiteContentsModel,
} from "@libs/business/entity";

export class SiteContentSupabaseRepository {
  static async getConstants(): Promise<SiteContentsModel> {
    const supabase = createServerClient();

    const { data, error } = await supabase.from("site_content").select("*");

    if (error) {
      console.error(error);
      return [];
    }

    return data.map(SiteContentSupabaseRepository.mapToModel);
  }

  static async getConstant(key: string): Promise<SiteContentModel | undefined> {
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .eq("key", key)
      .single();

    if (error) {
      console.error(error);
      return undefined;
    }

    return SiteContentSupabaseRepository.mapToModel(data);
  }

  private static mapToModel(data: Tables<"site_content">): SiteContentModel {
    return {
      name: data.id.toString(),
      key: data.key,
      value: data.value,
    };
  }
}
