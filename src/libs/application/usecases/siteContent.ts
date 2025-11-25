import type { SiteContent, SiteContents } from '@libs/application/dtos/siteContent'
import { SiteContentCmsRepository } from '@libs/infrastructure/persistance/cms-api/siteContent'

export class SiteContentUseCase {
  static async getConstants(): Promise<SiteContents | undefined> {
    const response = await SiteContentCmsRepository.getConstants()
    if (!response) return undefined

    return response
  }

  static async getConstant(slug: string): Promise<SiteContent | undefined> {
    const response = await SiteContentCmsRepository.getConstant(slug)
    if (!response) return undefined

    return response
  }
}
