import type { SiteContentModel, SiteContentsModel } from '@libs/business/entity'

import { BaseCmsRepository } from './base/cms'

export class SiteContentCmsRepository {
  static async getConstants(): Promise<SiteContentsModel | undefined> {
    const response = await BaseCmsRepository.handleGet<SiteContentsModel>('/site-contents')
    return response.data
  }

  static async getConstant(key: string): Promise<SiteContentModel | undefined> {
    const response = await BaseCmsRepository.handleGet<SiteContentModel>(
      `/site-contents/key/${key}`
    )
    return response.data
  }
}
