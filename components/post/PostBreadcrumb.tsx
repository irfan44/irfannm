import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const PostBreadcrumb = () => {
  return (
    <div className="mb-2 flex w-fit items-center text-neutral-900 hover:cursor-pointer dark:text-gray-200">
      <Link href="/">Home</Link>
      <RiArrowRightSLine className="text-2xl" />
      <Link href="/blog">Blog</Link>
    </div>
  )
}

export default PostBreadcrumb
