import axios from 'axios'

const cmsUrl = import.meta.env.CMS_API_URL || 'http://localhost:3000'

export const cmsClient = axios.create({
  baseURL: cmsUrl,
})
