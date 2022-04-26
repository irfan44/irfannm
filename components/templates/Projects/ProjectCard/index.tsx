import Link from 'next/link';
import IconsGithub from 'components/icons/Socials/IconsGithub';

type Props = {
  name: string;
  description: string;
  techStack: string[];
  sourceCode: string;
};
const ProjectCard = ({ name, description, techStack, sourceCode }: Props) => {
  return (
    <div className="space-y-3 border border-dark dark:border-neutral-50 rounded-2xl p-5 hover:shadow">
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="flex space-x-2">
        {techStack.map((stack) => {
          return (
            <div
              key={stack}
              className="bg-dark text-white dark:bg-transparent dark:border dark:border-neutral-50 px-2 py-1 rounded-lg text-sm"
            >
              <p>{stack}</p>
            </div>
          );
        })}
      </div>
      {sourceCode.length !== 0 && (
        <div className="flex space-x-2 items-center hover:underline">
          <IconsGithub />
          <Link href={sourceCode}>
            <a>Source Code</a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default ProjectCard;
