import ExternalLink from '../../lib/ui/ExternalLink';

const CVButton = () => {
  return (
    <ExternalLink type="text" title="View my CV!" href="https://irfannm.dev/cv">
      <span className="text-xl">📄</span>
      <span>View my CV!</span>
    </ExternalLink>
  );
};

export default CVButton;
