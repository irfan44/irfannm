import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Projects from 'types/projects';
import ExternalLink from 'lib/ui/ExternalLink';

const ProjectCard = ({
  name,
  description,
  techStack,
  sourceCode,
  url,
}: Projects) => {
  return (
    <div className="flex flex-col justify-between space-y-3 bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 rounded-2xl p-5 hover:rounded-xl">
      <Image
        className="rounded-2xl"
        alt={name}
        src="/assets/projects/project-default.png"
        height={278}
        width={590}
      />
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="space-y-4">
        <div className="flex space-x-2">
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
        <div className="flex space-x-4">
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
    </div>
  );
};
export default ProjectCard;