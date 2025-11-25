import type { SiteContentModel, SiteContentsModel } from '@libs/domain/models/siteContent'
import { BaseCmsRepository } from '@libs/infrastructure/persistance/cms-api/base/cms'

export class SiteContentCmsRepository {
  static async getConstants(): Promise<SiteContentsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<SiteContentsModel>('/site-contents')
    return response.data
  }

  static async getConstant(slug: string): Promise<SiteContentModel | undefined> {
    const response = await BaseCmsRepository.handleGet<SiteContentModel>(`/site-contents/${slug}`)
    return response.data
  }
}
