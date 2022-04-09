import Link from "next/link";
import IconsGithub from "../../icons/icons-github";

type Props = {
  key: string;
  name: string;
  description: string;
  techStack: string[];
  sourceCode: string;
};
const ProjectCard = ({
  key,
  name,
  description,
  techStack,
  sourceCode,
}: Props) => {
  return (
    <div className="space-y-3">
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="flex space-x-2">
        {techStack.map((stack) => {
          return (
            <div
              key={key}
              className="bg-black text-white px-2 py-1 rounded-lg text-sm"
            >
              <p>{stack}</p>
            </div>
          );
        })}
      </div>
      {sourceCode.length !== 0 && (
        <div className="flex space-x-2 items-center underline">
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
