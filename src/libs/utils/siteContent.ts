import type { SiteContent, SiteContents } from '@libs/application/dtos/siteContent'

interface ResumeUrlContent {
  value: string
  updatedAt: string
}

export function getSiteContent(contents: SiteContents | undefined, key: string): string

export function getSiteContent(
  contents: SiteContents | undefined,
  key: string,
  isResume: true
): ResumeUrlContent

export function getSiteContent(
  contents: SiteContents | undefined,
  key: string,
  isResume = false
): string | ResumeUrlContent {
  const siteContentResult = contents?.find((c: SiteContent) => c.key === key)

  if (!isResume) {
    return siteContentResult?.value ?? ''
  }

  let resumeUrl = { value: '', updatedAt: '' }

  if (siteContentResult) {
    try {
      const parsed = JSON.parse(siteContentResult.value)
      resumeUrl = {
        value: parsed.url ?? '',
        updatedAt: parsed.updated ?? '',
      }
    } catch {}
  }

  return resumeUrl
}
