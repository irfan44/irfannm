import { experiences } from 'datas/experience';

const Experience = () => {
  return (
    <div>
      <h2 className="mb-6">Experience</h2>
      <div className="flex flex-col space-y-8">
        {experiences.map((value) => {
          return (
            <div key={value.year}>
              <hr className="border border-neutral-300 dark:border-neutral-500 mb-8" />
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-[100px_minmax(0,1fr)]">
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
                        <div className="mt-2">
                          <p>Responsible for :</p>
                          <ul className="list-disc ml-5">
                            {work.responsibility.map((responsibility) => {
                              return (
                                <li key={responsibility}>{responsibility}</li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
