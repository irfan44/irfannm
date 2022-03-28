import SectionTitle from "../common/section-title";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <section>
      <SectionTitle title={title} />
      {children}
    </section>
  );
};

export default Section;
