import { cmsApiClient } from '@libs/business/repository/client'

interface BaseCmsResponse<T> {
  data: T
}

export class BaseCmsRepository {
  static async handleGet<T>(url: string) {
    const response = await cmsApiClient.get<BaseCmsResponse<T>>(url)
    return response.data
  }

  static async handlePost<T>(url: string, data: T) {
    const response = await cmsApiClient.post<BaseCmsResponse<T>>(url, data)
    return response.data
  }
}
