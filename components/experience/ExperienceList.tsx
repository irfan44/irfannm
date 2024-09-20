import type { ExperienceModel } from 'lib/models/experience'

import ExperienceCard from './ExperienceCard'

interface Props {
  withResponsibility?: boolean
  experiences: ExperienceModel[]
}

const ExperienceList = ({ withResponsibility, experiences }: Props) => {
  return (
    <>
      {experiences.map((experience) => {
        return (
          <div key={experience.startingDate}>
            {withResponsibility && (
              <hr className="mb-6 border border-neutral-300 dark:border-neutral-500" />
            )}
            <ExperienceCard
              withResponsibility={withResponsibility}
              experience={experience}
            />
          </div>
        )
      })}
    </>
  )
}

export default ExperienceList
