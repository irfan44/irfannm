import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

const cmsUrl = import.meta.env.CMS_API_URL || 'http://localhost:3000'

export const cmsClient = axios.create({
  baseURL: cmsUrl,
})

cmsClient.interceptors.response.use((res) => {
  res.data = camelcaseKeys(res.data, { deep: true })
  return res
})
