import { ReactNode } from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {
  children: ReactNode
  url: string
}

const ReadMore = ({ url, children }: Props) => {
  return (
    <Link href={url} passHref>
      <p className="mt-4 flex items-center font-medium text-black hover:cursor-pointer hover:underline dark:text-white">
        {children}
        <HiArrowNarrowRight className="ml-1 text-xl" />
      </p>
    </Link>
  )
}
export default ReadMore
