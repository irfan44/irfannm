import type { BaseCmsResponse } from '@libs/api/types/cms'
import type { SiteContentModel, SiteContentsModel } from '@libs/models/siteContent'

export type SiteContentsResponse = BaseCmsResponse<SiteContentsModel>

export type SiteContentResponse = BaseCmsResponse<SiteContentModel>
