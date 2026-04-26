import type { SiteContent, SiteContents } from '@libs/business/entity'
import { SiteContentCmsRepository } from '@libs/business/repository'

export class SiteContentUseCase {
  static async getConstants(): Promise<SiteContents | undefined> {
    const response = await SiteContentCmsRepository.getConstants()
    if (!response) return undefined

    return response
  }

  static async getConstant(key: string): Promise<SiteContent | undefined> {
    const response = await SiteContentCmsRepository.getConstant(key)
    if (!response) return undefined

    return response
  }
}
