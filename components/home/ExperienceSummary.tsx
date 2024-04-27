import Section from '../layouts/Section';
import { experiences } from 'datas/experience';
import ReadMore from './ReadMore';

const ExperienceSummary = () => {
  return (
    <>
      <Section title="Experience">
        <div className="flex flex-col space-y-6">
          {experiences.map((value) => {
            return (
              <div key={value.year}>
                <hr className="border border-neutral-300 dark:border-neutral-500 mb-6" />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)]">
                  <div>
                    <h3>{value.year}</h3>
                  </div>
                  <div className="space-y-4">
                    {value.experience.map((work) => {
                      return (
                        <div key={work.year}>
                          <h4>{work.title}</h4>
                          <p>
                            <span className="font-bold">{work.company}</span>,{' '}
                            {work.employmentType}
                          </p>
                          <p>{work.year}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ReadMore url="about">View more</ReadMore>
      </Section>
    </>
  );
};

export default ExperienceSummary;
