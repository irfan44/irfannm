import type { ReactNode } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

type Props = {
  children: ReactNode
  url: string
}

const ReadMore = ({ url, children }: Props) => {
  return (
    <a className="block w-fit" href={url}>
      <p className="mt-4 flex items-center font-semibold text-black hover:cursor-pointer hover:underline dark:text-white">
        {children}
        <HiArrowNarrowRight className="ml-1 text-xl" />
      </p>
    </a>
  )
}
export default ReadMore
