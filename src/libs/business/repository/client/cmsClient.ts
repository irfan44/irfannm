import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'

import { getCmsError } from './cmsError'

const cmsUrl = import.meta.env.CMS_API_URL || 'http://localhost:3000'

export const cmsApiClient = axios.create({
  baseURL: cmsUrl,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
})

cmsApiClient.interceptors.response.use(
  (res) => {
    res.data = camelcaseKeys(res.data, { deep: true })
    return res
  },
  (error) => {
    return Promise.reject(getCmsError(error))
  }
)
