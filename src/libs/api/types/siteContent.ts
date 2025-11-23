import type { BaseCmsResponse } from '@libs/api/types/cms.ts'
import type { SiteContentModel, SiteContentsModel } from '@libs/models/siteContent.ts'

export type SiteContentsResponse = BaseCmsResponse<SiteContentsModel>

export type SiteContentResponse = BaseCmsResponse<SiteContentModel>
