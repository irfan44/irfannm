import Title from 'components/common/base/Title'

type Props = {
  children: React.ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <Title
      type="pageTitle"
      className="mb-4 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-5xl"
    >
      {children}
    </Title>
  )
}

export default PostTitle
