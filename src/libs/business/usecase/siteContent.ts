import type { SiteContent, SiteContents } from '@libs/business/entity'
import { SiteContentSupabaseRepository } from '@libs/business/repository'

export class SiteContentUseCase {
  static async getConstants(): Promise<SiteContents | undefined> {
    const response = await SiteContentSupabaseRepository.getConstants()
    if (!response) return undefined

    return response
  }

  static async getConstant(key: string): Promise<SiteContent | undefined> {
    const response = await SiteContentSupabaseRepository.getConstant(key)
    if (!response) return undefined

    return response
  }
}
