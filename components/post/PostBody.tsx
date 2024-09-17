type Props = {
  children: React.ReactNode
}

const PostBody = ({ children }: Props) => {
  return (
    <article className="prose mx-auto mb-32 max-w-5xl text-neutral-800 dark:prose-invert md:prose-lg dark:text-gray-200">
      {children}
    </article>
  )
}

export default PostBody
