import type { ExperienceModel } from 'lib/models/experience'
import convertDate from 'lib/utils/convertDate'

interface Props {
  withResponsibility?: boolean
  experience: ExperienceModel
}

const ExperienceCard = ({ withResponsibility = false, experience }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
        <div className="h-fit w-fit rounded-2xl bg-secondary p-2 dark:bg-white">
          <img
            className="h-10 w-10 object-scale-down"
            src={experience.companyLogo.secure_url}
            alt={experience.company}
            height={40}
            width={40}
          />
        </div>
        <div>
          <h4>{experience.title}</h4>
          <div>
            <strong>{experience.company}</strong>
            <span>, {experience.employmentType}</span>
          </div>
          <div className="flex space-x-1">
            <span>{convertDate(experience.startingDate)}</span>
            <span>-</span>
            {experience.endDate ? (
              <span>{convertDate(experience.endDate)}</span>
            ) : (
              <span>Present</span>
            )}
          </div>
        </div>
      </div>
      {withResponsibility && (
        <>
          {experience.responsibility.length > 0 ? (
            <div className="mt-2">
              <p>Responsible for :</p>
              <ul className="ml-5 list-disc">
                {experience.responsibility.map((responsibility) => {
                  return <li key={responsibility}>{responsibility}</li>
                })}
              </ul>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default ExperienceCard
