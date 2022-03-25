type Props = {
  title: string;
};
const SectionTitle = ({ title }: Props) => {
  return <h2 className="font-bold leading-tight mb-6">{title}</h2>;
};

export default SectionTitle;
