import type { ExperiencesModel } from 'lib/models/experience'

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
                      <div key={work.period}>
                        <h4>{work.title}</h4>
                        <p>
                          <strong>{work.company}</strong>, {work.employmentType}
                        </p>
                        <p>{work.period}</p>
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
