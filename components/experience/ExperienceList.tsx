import type { ExperiencesModel } from 'lib/models/experience'
import convertDate from 'lib/utils/convertDate'

interface Props {
  withResponsibility?: boolean
  experiences: ExperiencesModel
}

const ExperienceList = ({ withResponsibility = false, experiences }: Props) => {
  return (
    <>
      {experiences.map((data) => {
        return (
          <div key={data.year}>
            <hr className="mb-6 border border-neutral-300 dark:border-neutral-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[100px_minmax(0,1fr)]">
              <div>
                <h3>{data.year}</h3>
              </div>
              <div className="space-y-4">
                {data.experiences.map((work) => {
                  return (
                    <div key={work.startingDate}>
                      <h4>{work.title}</h4>
                      <div>
                        <strong>{work.company}</strong>
                        <span>, {work.employmentType}</span>
                      </div>
                      <div className="flex space-x-1">
                        <span>{convertDate(work.startingDate)}</span>
                        <span>-</span>
                        {work.endDate ? (
                          <span>{convertDate(work.endDate)}</span>
                        ) : (
                          <span>Present</span>
                        )}
                      </div>
                      {withResponsibility && (
                        <div className="mt-2">
                          <p>Responsible for :</p>
                          <ul className="ml-5 list-disc">
                            {work.responsibility.map((responsibility) => {
                              return (
                                <li key={responsibility}>{responsibility}</li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ExperienceList
