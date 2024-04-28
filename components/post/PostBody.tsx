type Props = {
  children: React.ReactNode
}

const PostBody = ({ children }: Props) => {
  return (
    <article className="max-w-5xl mx-auto mb-32 text-neutral-800 prose md:prose-lg dark:prose-invert dark:text-gray-200">
      {children}
    </article>
  )
}

export default PostBody
