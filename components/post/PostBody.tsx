type Props = {
  children: React.ReactNode
}

const PostBody = ({ children }: Props) => {
  return <div className="max-w-5xl mx-auto">{children}</div>
}

export default PostBody
