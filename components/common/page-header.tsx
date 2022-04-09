type Props = {
  pageTitle: string;
  pageDescription: string;
};

const PageHeader = ({ pageTitle, pageDescription }: Props) => {
  return (
    <>
      <div>
        <h1 className="mb-6">{pageTitle}</h1>
        <p>{pageDescription}</p>
      </div>
    </>
  );
};

export default PageHeader;
