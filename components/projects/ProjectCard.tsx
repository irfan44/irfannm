import Image from 'next/image';
import { FaChevronRight, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Projects from 'types/projects';
import ExternalLink from 'components/common/base/ExternalLink';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ProjectCard = ({
  name,
  description,
  techStack,
  images,
  company,
  whatIDo,
  url,
  sourceCode,
  overview,
  date,
  role,
  type,
}: Projects) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col justify-between space-y-3 bg-white border border-neutral-200 cursor-pointer dark:bg-neutral-800 dark:border-neutral-700 rounded-2xl p-5 hover:rounded-xl hover:shadow dark:hover:shadow-neutral-700"
        onClick={() => setIsOpen(true)}
      >
        <h4 className="flex items-center">
          {name}{' '}
          <span className="text-sm ml-2">
            <FaChevronRight />
          </span>
        </h4>
        <p>{description}</p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((stack) => {
              return (
                <div
                  key={stack}
                  className="bg-black text-white px-2 py-1 rounded-lg text-sm flex items-center dark:bg-neutral-900"
                >
                  <p>{stack}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-scroll md:overflow-hidden">
          <Dialog.Panel className="space-y-4 mx-auto w-full lg:w-2/3 rounded-3xl bg-white p-6 my-4  dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <p>Project Details</p>
              <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <div>
                  <h4>{name}</h4>
                  {company && <p>{company}</p>}
                  <p>{date}</p>
                </div>
                <div className="space-y-1">
                  {url.length !== 0 && (
                    <div className="hover:underline">
                      <ExternalLink
                        type="text"
                        title="Visit website"
                        href={url}
                        iconLeft={
                          <FiExternalLink className="text-xl text-black dark:text-white" />
                        }
                      >
                        <span>Visit</span>
                      </ExternalLink>
                    </div>
                  )}
                  {sourceCode.length !== 0 && (
                    <div className="hover:underline">
                      <ExternalLink
                        type="text"
                        title="View source code"
                        href={sourceCode}
                        iconLeft={
                          <FaGithub className="text-xl text-black dark:text-white" />
                        }
                      >
                        <span>Source code</span>
                      </ExternalLink>
                    </div>
                  )}
                </div>
              </div>
              {type === 'Work' && (
                <div>
                  <p className="break-words">{overview}</p>
                </div>
              )}
              {type === 'Personal' && (
                <div className="py-2 flex justify-center">
                  <Image
                    className="rounded-xl"
                    src={`/assets/projects/${images}`}
                    alt={name}
                    width={500}
                    height={300}
                  />
                </div>
              )}
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {type === 'Personal' && (
                <div>
                  <p className="break-words">{overview}</p>
                </div>
              )}
              {type === 'Work' && (
                <div className="space-y-2">
                  <div>
                    <h5>Role</h5>
                    <p>{role}</p>
                  </div>
                  <div>
                    <h5>What I do</h5>
                    <ul className="list-disc ml-5">
                      {whatIDo &&
                        whatIDo.map((value) => {
                          return (
                            <li key={value} className="break-words">
                              {value}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              )}
              <div>
                <h5>Tech Stack</h5>
                <ul className="list-disc ml-5">
                  {techStack.map((stack) => {
                    return <li key={stack}>{stack}</li>;
                  })}
                </ul>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard;
