import { cmsClient } from '@libs/api/rest/cms'

export class BaseCmsService {
  static async handleGet<T>(url: string) {
    const response = await cmsClient.get<T>(url)
    return response.data
  }

  static async handlePost<T>(url: string, data: T) {
    const response = await cmsClient.post<T>(url, data)
    return response.data
  }
}
