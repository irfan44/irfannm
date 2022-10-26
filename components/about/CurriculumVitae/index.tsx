import Link from 'next/link';

const CurriculumVitae = () => {
  return (
    <div>
      <div className="mb-6">
        <h2>Curriculum Vitae</h2>
      </div>
      <div>
        <p>
          You can see and download my latest CV{' '}
          <Link
            href="https://drive.google.com/file/d/14SkpfAltg0GS4qfomrwZH3g8fpGxDulX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold"
          >
            here
          </Link>{' '}
          (last updated: April 2022)
        </p>
      </div>
    </div>
  );
};

export default CurriculumVitae;
