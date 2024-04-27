import Text from 'components/common/base/Title';

type Props = {
  pageTitle: string;
  pageDescription?: string;
};

const PageHeader = ({ pageTitle, pageDescription = '' }: Props) => {
  return (
    <div>
      <Text type="pageTitle" className="mb-6">
        {pageTitle}
      </Text>
      {pageDescription.length !== 0 && <p>{pageDescription}</p>}
    </div>
  );
};

export default PageHeader;
