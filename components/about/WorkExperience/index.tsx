import workExperience from 'data/workExperience';

const WorkExperience = () => {
  return (
    <div>
      <div className="mb-6">
        <h2>Work Experience</h2>
      </div>
      <div className="flex flex-col">
        {workExperience.map((work) => {
          return (
            <div key={work.title}>
              <div className="py-2 text-left">
                <div>
                  <p className="font-bold">{work.title}</p>
                  <p>
                    {work.company}, {work.year}
                  </p>
                </div>
              </div>
              <div className="py-2">
                <p>Responsible for :</p>
                <ul className="list-disc ml-5">
                  {work.responsibility.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
