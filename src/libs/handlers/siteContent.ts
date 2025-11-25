import type { SiteContent, SiteContents } from '@libs/application/dtos/siteContent'
import { SiteContentUseCase } from '@libs/application/usecases/siteContent'

export class SiteContentHandler {
  static async getConstants(): Promise<SiteContents | undefined> {
    const response = await SiteContentUseCase.getConstants()
    if (!response) return undefined

    return response
  }

  static async getConstant(slug: string): Promise<SiteContent | undefined> {
    const response = await SiteContentUseCase.getConstant(slug)
    if (!response) return undefined

    return response
  }
}
