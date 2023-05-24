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
            href="https://drive.google.com/file/d/14SkpfAltg0GS4qfomrwZH3g8fpGxDulX/view?usp=sharing"
            className="font-bold underline"
          >
            here
          </ExternalLink>{' '}
          <span>(last updated: April 2022)</span>
        </p>
      </div>
    </div>
  );
};

export default CurriculumVitae;
