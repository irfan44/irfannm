import { ReactNode } from 'react'

export interface Props {
  type: 'button' | 'text'
  title: string
  href: string
  className?: string
  children: ReactNode
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

const ExternalLink = ({
  type,
  title,
  href,
  children,
  iconLeft,
  iconRight,
}: Props) => {
  switch (type) {
    case 'button':
      return (
        <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-semibold space-x-2"
            title={title}
            href={href}
          >
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </a>
        </div>
      )
    case 'text':
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit flex items-center font-semibold space-x-2 hover:underline"
          title={title}
          href={href}
        >
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </a>
      )
    default:
      return <a>{children}</a>
  }
}

export default ExternalLink
