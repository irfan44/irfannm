type Props = {
  pageTitle: string;
  pageDescription?: string;
};

const PageHeader = ({ pageTitle, pageDescription = '' }: Props) => {
  return (
    <div>
      <h1 className="mb-6">{pageTitle}</h1>
      {pageDescription.length !== 0 && <p>{pageDescription}</p>}
    </div>
  );
};

export default PageHeader;
