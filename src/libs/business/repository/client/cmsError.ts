import axios from 'axios'

function readErrorMessage(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null

  if ('message' in data && typeof data.message === 'string') {
    return data.message
  }

  if ('error' in data && typeof data.error === 'string') {
    return data.error
  }

  return null
}

export function getCmsError(error: unknown): Error {
  if (!axios.isAxiosError(error)) {
    return error instanceof Error ? error : new Error('Unexpected CMS client error')
  }

  const method = error.config?.method?.toUpperCase() ?? 'GET'
  const requestPath = error.config?.url ?? 'unknown-url'
  const statusCode = error.response?.status
  const details =
    readErrorMessage(error.response?.data) ?? error.response?.statusText ?? error.message

  const message = statusCode
    ? `CMS request failed (${statusCode}) for ${method} ${requestPath}: ${details}`
    : `CMS request failed for ${method} ${requestPath}: ${details}`

  return new Error(message, { cause: error })
}
