import { SiteContentService } from '@libs/api/services/siteContent'
import type { SiteContentModel, SiteContentsModel } from '@libs/models/siteContent'

export class SiteContentController {
  static async getConstants(): Promise<SiteContentsModel | undefined> {
    const response = await SiteContentService.getConstants()
    if (!response) return undefined

    return response.data
  }

  static async getConstant(slug: string): Promise<SiteContentModel | undefined> {
    const response = await SiteContentService.getConstant(slug)
    if (!response) return undefined

    return response.data
  }
}
