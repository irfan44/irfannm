import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const PostBreadcrumb = () => {
  return (
    <div className="flex items-center mb-2 w-fit hover:cursor-pointer text-neutral-900 dark:text-gray-200">
      <Link href="/">Home</Link>
      <RiArrowRightSLine className="text-2xl" />
      <Link href="/blog">Blog</Link>
    </div>
  )
}

export default PostBreadcrumb
