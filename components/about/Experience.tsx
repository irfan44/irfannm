import { Disclosure } from '@headlessui/react';
import experience from 'data/experience';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const Experience = () => {
  return (
    <div>
      <h2 className="mb-6">Experience</h2>
      <div className="flex flex-col space-y-4">
        {experience.map((work, index) => {
          return (
            <Disclosure key={work.title} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <Disclosure.Button>
                    <div className="flex justify-between items-center bg-white py-2 px-4 rounded-2xl dark:bg-neutral-800 hover:rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700">
                      <div className="text-left">
                        <p className="font-bold">{work.title}</p>
                        <p>
                          {work.company}, {work.employmentType}
                        </p>
                        <p>{work.year}</p>
                      </div>
                      <div>
                        {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                      </div>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="py-3 bg-white px-4 rounded-2xl dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                      <p>Responsible for :</p>
                      <ul className="list-disc ml-5">
                        {work.responsibility.map((responsibility) => {
                          return <li key={responsibility}>{responsibility}</li>;
                        })}
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
