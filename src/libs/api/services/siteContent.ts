import { BaseCmsService } from '@libs/api/services/base/cms.ts'
import type { SiteContentResponse, SiteContentsResponse } from '@libs/api/types/siteContent.ts'

export class SiteContentService {
  static async getConstants(): Promise<SiteContentsResponse | undefined> {
    const response = await BaseCmsService.handleGet<SiteContentsResponse>('/site-content')
    return response
  }

  static async getConstant(slug: string): Promise<SiteContentResponse | undefined> {
    const response = await BaseCmsService.handleGet<SiteContentResponse>(`/site-content/${slug}`)
    return response
  }
}
