import Text from 'lib/ui/Text';

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <Text type="sectionTitle" className="mb-6">
      {title}
    </Text>
  );
};

export default SectionTitle;
