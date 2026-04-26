export type SiteContentsModel = SiteContentModel[]

export interface SiteContentModel {
  name: string
  key: string
  value: string
}

export type SiteContents = SiteContent[]

export interface SiteContent {
  name: string
  key: string
  value: string
}
