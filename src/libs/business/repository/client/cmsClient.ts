import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const cmsUrl = import.meta.env.CMS_API_URL || 'http://localhost:3000'

export const cmsApiClient = axios.create({
  baseURL: cmsUrl,
})

cmsApiClient.interceptors.response.use((res) => {
  res.data = camelcaseKeys(res.data, { deep: true })
  return res
})
