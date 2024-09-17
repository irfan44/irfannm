import ReadMore from 'components/home/ReadMore'
import Section from 'components/layouts/Section'
import type { ExperiencesModel } from 'lib/models/experience'
import convertDate from 'lib/utils/convertDate'

interface Props {
  experiences: ExperiencesModel
}

const ExperienceSummary = ({ experiences }: Props) => {
  return (
    <>
      <Section title="Experience">
        <div className="flex flex-col space-y-6">
          {experiences.map((data) => {
            return (
              <div key={data.year}>
                <hr className="border border-neutral-300 dark:border-neutral-500 mb-6" />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)]">
                  <div>
                    <h3>{data.year}</h3>
                  </div>
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
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <ReadMore url="/about#experience">View more</ReadMore>
      </Section>
    </>
  )
}

export default ExperienceSummary
