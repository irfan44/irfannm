import Section from 'components/common/layouts/Section'
import ExperienceList from 'components/experience/ExperienceList'
import ReadMore from 'components/home/ReadMore'
import type { ExperiencesModel } from 'lib/models/experience'

interface Props {
  experiences: ExperiencesModel
}

const ExperienceSummary = ({ experiences }: Props) => {
  return (
    <Section title="Working Experience">
      <div className="space-y-6">
        <ExperienceList experiences={experiences} />
      </div>
      <ReadMore url="/about#experience">View more</ReadMore>
    </Section>
  )
}

export default ExperienceSummary
