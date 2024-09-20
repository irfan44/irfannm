import ExperienceList from 'components/experience/ExperienceList'
import type { ExperiencesModel } from 'lib/models/experience'

interface Props {
  experiences: ExperiencesModel
}

const Experience = ({ experiences }: Props) => {
  return (
    <div id="experience">
      <h2 className="mb-6">Working Experience</h2>
      <div className="space-y-6">
        <ExperienceList withResponsibility experiences={experiences} />
      </div>
    </div>
  )
}

export default Experience
