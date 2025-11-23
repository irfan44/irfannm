import type { BaseCmsResponse } from '@libs/api/types/cms'
import type { ProjectModel, ProjectsModel } from '@libs/models/project'

export type ProjectsResponse = BaseCmsResponse<ProjectsModel>

export type ProjectResponse = BaseCmsResponse<ProjectModel>
