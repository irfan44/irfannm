import { cmsApiClient } from '@libs/business/repository/client'

interface BaseCmsResponse<T> {
  data: T
}

export class BaseCmsRepository {
  static async handleGet<T>(url: string): Promise<BaseCmsResponse<T> | undefined> {
    try {
      const response = await cmsApiClient.get<BaseCmsResponse<T>>(url)
      return response.data
    } catch (error) {
      console.error(error)
      return undefined
    }
  }

  static async handlePost<T>(url: string, data: T): Promise<BaseCmsResponse<T> | undefined> {
    try {
      const response = await cmsApiClient.post<BaseCmsResponse<T>>(url, data)
      return response.data
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
}
