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
      <p className="mt-4 font-medium flex items-center hover:cursor-pointer hover:underline text-black dark:text-white">
        {children}
        <HiArrowNarrowRight className="text-xl ml-1" />
      </p>
    </Link>
  )
}
export default ReadMore
