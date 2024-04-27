import Title from 'components/common/base/Title'

type Props = {
  title: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <section>
      <Title type="sectionTitle" className="mb-6">
        {title}
      </Title>
      {children}
    </section>
  )
}

export default Section
