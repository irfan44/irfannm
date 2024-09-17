import { ExperienceService } from 'lib/api/services/experience'
import type { ExperiencesModel } from 'lib/models/experience'

export class ExperienceController {
  static async getExperiences(): Promise<ExperiencesModel> {
    const response = await ExperienceService.getExperiences()
    const experiencesData = response.experiences

    const groupedByYear = experiencesData.reduce((acc: any, exp) => {
      const year = new Date(exp.startingDate).getFullYear()
      if (!acc[year]) {
        acc[year] = { year, experiences: [] }
      }
      acc[year].experiences.push(exp)
      return acc
    }, {})

    const sortedExperiences = Object.values(groupedByYear).sort(
      (a: any, b: any) => b.year - a.year
    ) as ExperiencesModel

    return sortedExperiences
  }
}
