import { Disclosure } from '@headlessui/react';

const WorkExperience = () => {
  const workExperience = [
    {
      title: 'Help Desk Assistant for Red Hat',
      company: 'Digital Talent Scholarship',
      year: '2020 - 2022',
      responsibility: [
        'Helping in managing Red Hat training LMS',
        'Preparing & managing live sessions at every weekdays',
        'Collaborating with instructor & replying training participant questions',
        'Communicating & reporting to Digital Talent Scholarship team',
      ],
    },
    {
      title: 'Information Technology Staff',
      company: 'Ramaniya',
      year: 'Sep - Dec 2021',
      responsibility: [
        'Managing and maintaining in-house IT infrastructure',
        'Managing and maintaining company website',
        'Helping non IT staff in IT related problems',
      ],
    },
  ];
  return (
    <div>
      <div className="mb-6">
        <h2>Work Experience</h2>
      </div>
      <div className="flex flex-col">
        {workExperience.map((work) => {
          return (
            <Disclosure key={work.title}>
              <Disclosure.Button className="py-2 text-left">
                <div>
                  <p className="font-bold">{work.title}</p>
                  <p>
                    {work.company}, {work.year}
                  </p>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                <p>Responsible for :</p>
                <ul className="list-disc ml-5">
                  {work.responsibility.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ul>
              </Disclosure.Panel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
