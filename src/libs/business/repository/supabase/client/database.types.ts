export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '13.0.5'
  }
  public: {
    Tables: {
      experience: {
        Row: {
          company: string
          company_logo: string
          created_at: string
          employment_type: string
          end_date: string | null
          id: number
          responsibilities: string[] | null
          starting_date: string
          title: string
        }
        Insert: {
          company: string
          company_logo: string
          created_at?: string
          employment_type: string
          end_date?: string | null
          id?: number
          responsibilities?: string[] | null
          starting_date: string
          title: string
        }
        Update: {
          company?: string
          company_logo?: string
          created_at?: string
          employment_type?: string
          end_date?: string | null
          id?: number
          responsibilities?: string[] | null
          starting_date?: string
          title?: string
        }
        Relationships: []
      }
      post: {
        Row: {
          category: number
          content: string
          cover_caption: string | null
          cover_image: string
          created_at: string
          date: string
          excerpt: string
          id: number
          slug: string
          title: string
        }
        Insert: {
          category: number
          content: string
          cover_caption?: string | null
          cover_image: string
          created_at?: string
          date: string
          excerpt: string
          id?: number
          slug: string
          title: string
        }
        Update: {
          category?: number
          content?: string
          cover_caption?: string | null
          cover_image?: string
          created_at?: string
          date?: string
          excerpt?: string
          id?: number
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'post_category_fkey'
            columns: ['category']
            isOneToOne: false
            referencedRelation: 'post_category'
            referencedColumns: ['id']
          },
        ]
      }
      post_category: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      project: {
        Row: {
          company: string | null
          created_at: string | null
          end_date: string | null
          excerpt: string
          id: number
          image: string | null
          is_featured: boolean
          name: string
          overview: string
          project_type: string
          responsibilities: string[] | null
          role: string
          slug: string
          source_code: string | null
          starting_date: string
          tech_stack: string[] | null
          url: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          end_date?: string | null
          excerpt: string
          id?: number
          image?: string | null
          is_featured: boolean
          name: string
          overview: string
          project_type: string
          responsibilities?: string[] | null
          role: string
          slug: string
          source_code?: string | null
          starting_date: string
          tech_stack?: string[] | null
          url?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          end_date?: string | null
          excerpt?: string
          id?: number
          image?: string | null
          is_featured?: boolean
          name?: string
          overview?: string
          project_type?: string
          responsibilities?: string[] | null
          role?: string
          slug?: string
          source_code?: string | null
          starting_date?: string
          tech_stack?: string[] | null
          url?: string | null
        }
        Relationships: []
      }
      site_content: {
        Row: {
          created_at: string
          id: number
          key: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: number
          key: string
          value: string
        }
        Update: {
          created_at?: string
          id?: number
          key?: string
          value?: string
        }
        Relationships: []
      }
      user: {
        Row: {
          auth_id: string
          avatar_url: string | null
          created_at: string
          display_name: string
          email: string
          id: number
        }
        Insert: {
          auth_id: string
          avatar_url?: string | null
          created_at?: string
          display_name: string
          email: string
          id?: number
        }
        Update: {
          auth_id?: string
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          email?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
