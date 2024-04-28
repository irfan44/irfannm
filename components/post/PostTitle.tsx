import Title from 'components/common/base/Title'

type Props = {
  children: React.ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Title
      type="pageTitle"
      className="lg:text-5xl md:text-5xl text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left"
    >
      {children}
    </Title>
  )
}

export default PostTitle
