import { ExperienceService } from '../api/services/experience'
import { ExperiencesModel } from '../models/experience'
// import { ExperienceModel } from '../models/experience'

export class ExperienceController {
  static async getExperiences(): Promise<ExperiencesModel> {
    const response = await ExperienceService.getExperiences()
    const experiencesData = response.experiences

    const experiencesObject: any = {}
    experiencesData.forEach((experience) => {
      const startingYear = experience.startingYear
      if (!experiencesObject[startingYear]) {
        experiencesObject[startingYear] = []
      }
      experiencesObject[startingYear].push(experience)
    })

    const experiences = Object.keys(experiencesObject)
      .map((year) => {
        return {
          year: parseInt(year),
          experiences: experiencesObject[year],
        }
      })
      .sort((a, b) => b.year - a.year)
    return experiences
  }
}
