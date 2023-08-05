import ExternalLink from '../../lib/ui/ExternalLink';
import { resumeURL } from 'data/resume';

const ResumeButton = () => {
  return (
    <ExternalLink type="text" title="View my CV!" href={resumeURL}>
      <span className="text-xl">📄</span>
      <span>View Resume!</span>
    </ExternalLink>
  );
};

export default ResumeButton;
