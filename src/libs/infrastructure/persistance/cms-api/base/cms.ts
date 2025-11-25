import type { BaseCmsResponse } from '@libs/domain/cms-api/response'
import { cmsClient } from '@libs/infrastructure/external/cms'

export class BaseCmsRepository {
  static async handleGet<T>(url: string) {
    const response = await cmsClient.get<BaseCmsResponse<T>>(url)
    return response.data
  }

  static async handlePost<T>(url: string, data: T) {
    const response = await cmsClient.post<BaseCmsResponse<T>>(url, data)
    return response.data
  }
}
