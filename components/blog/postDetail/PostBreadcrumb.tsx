import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const PostBreadcrumb = () => {
  return (
    <div className="mb-2 flex w-fit items-center text-neutral-900 dark:text-gray-200">
      <Link className="hover:underline" href="/">
        Home
      </Link>
      <FaChevronRight className="mx-1 text-sm" />
      <Link className="hover:underline" href="/blog">
        Blog
      </Link>
    </div>
  )
}

export default PostBreadcrumb
