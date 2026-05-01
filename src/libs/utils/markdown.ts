import { Marked, Renderer } from 'marked'

const allowedUrlProtocols = new Set(['http:', 'https:', 'mailto:', 'tel:'])

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isAllowedInlineHtmlTag(text: string): boolean {
  return /^<\/?u>$/i.test(text.trim())
}

function sanitizeUrl(url: string | null | undefined): string | null {
  if (!url) return null

  const normalizedUrl = url.trim()
  if (!normalizedUrl) return null

  if (
    normalizedUrl.startsWith('/') ||
    normalizedUrl.startsWith('./') ||
    normalizedUrl.startsWith('../') ||
    normalizedUrl.startsWith('#')
  ) {
    return normalizedUrl
  }

  try {
    const parsedUrl = new URL(normalizedUrl)
    return allowedUrlProtocols.has(parsedUrl.protocol) ? normalizedUrl : null
  } catch {
    return null
  }
}

const renderer = new Renderer()

renderer.html = ({ text }) => (isAllowedInlineHtmlTag(text) ? text : escapeHtml(text))

renderer.link = function ({ href, title, tokens }) {
  const sanitizedUrl = sanitizeUrl(href)
  const content = this.parser.parseInline(tokens)

  if (!sanitizedUrl) {
    return content
  }

  const titleAttribute = title ? ` title="${escapeHtml(title)}"` : ''
  return `<a href="${escapeHtml(sanitizedUrl)}"${titleAttribute}>${content}</a>`
}

renderer.image = function ({ href, title, text }) {
  const sanitizedUrl = sanitizeUrl(href)
  if (!sanitizedUrl) {
    return escapeHtml(text)
  }

  const titleAttribute = title ? ` title="${escapeHtml(title)}"` : ''
  return `<img src="${escapeHtml(sanitizedUrl)}" alt="${escapeHtml(text)}"${titleAttribute}>`
}

const markdownRenderer = new Marked({
  async: true,
  gfm: true,
  renderer,
})

export async function renderMarkdownSafely(markdownSource: string): Promise<string> {
  return markdownRenderer.parse(markdownSource)
}
