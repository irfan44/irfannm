import type { ExperiencesModel } from 'lib/models/experience'
import convertDate from 'lib/utils/convertDate'

interface Props {
  experiences: ExperiencesModel
}

const Experience = ({ experiences }: Props) => {
  return (
    <div>
      <h2 className="mb-6">Experience</h2>
      <div className="flex flex-col space-y-8">
        {experiences.map((data) => {
          return (
            <div key={data.year}>
              <hr className="border border-neutral-300 dark:border-neutral-500 mb-8" />
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-[100px_minmax(0,1fr)]">
                <h3>{data.year}</h3>
                <div className="space-y-4">
                  {data.experiences.map((work) => {
                    return (
                      <div key={work.startingDate}>
                        <h4>{work.title}</h4>
                        <div className="flex space-x-1">
                          <span className="font-bold">{work.company},</span>
                          <span>{work.employmentType}</span>
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
                        <div className="mt-2">
                          <p>Responsible for :</p>
                          <ul className="list-disc ml-5">
                            {work.responsibility.map((responsibility) => {
                              return (
                                <li key={responsibility}>{responsibility}</li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
