import Title from '@components/common/base/Title'

type Props = {
  title: string
  description?: string
}

const PageHeader = ({ title, description }: Props) => {
  return (
    <div>
      <Title type="pageTitle" className="mb-6">
        {title}
      </Title>
      {description && <p>{description}</p>}
    </div>
  )
}

export default PageHeader
