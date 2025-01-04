import Section from '@components/common/layouts/Section'
// import ExperienceList from '@components/experience/ExperienceList'
import ReadMore from '@components/home/ReadMore'
import type { ExperiencesModel } from '@libs/models/experience'

interface Props {
  recentExperiences: ExperiencesModel
}

const RecentExperience = ({ recentExperiences }: Props) => {
  return (
    <Section title="Working Experience">
      <div className="space-y-6">
        {/* <ExperienceList experiences={recentExperiences} /> */}
      </div>
      <ReadMore url="/about#experience">View more</ReadMore>
    </Section>
  )
}

export default RecentExperience
