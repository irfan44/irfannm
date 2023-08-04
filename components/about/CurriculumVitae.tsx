import ExternalLink from 'lib/ui/ExternalLink';

const CurriculumVitae = () => {
  return (
    <div>
      <div className="mb-6">
        <h2>Curriculum Vitae</h2>
      </div>
      <div>
        <p>
          You can see and download my latest CV{' '}
          <ExternalLink
            type="text"
            title="Download here"
            href="https://irfannm.dev/cv"
            className="font-bold underline"
          >
            here
          </ExternalLink>{' '}
          <span>(last updated: August 2023)</span>
        </p>
      </div>
    </div>
  );
};

export default CurriculumVitae;
