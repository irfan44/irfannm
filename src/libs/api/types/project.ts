import type { BaseCmsResponse } from '@libs/api/types/cms.ts'
import type { ProjectModel, ProjectsModel } from '@libs/models/project'

export type ProjectsResponse = BaseCmsResponse<ProjectsModel>

export type ProjectResponse = BaseCmsResponse<ProjectModel>
