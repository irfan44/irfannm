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
  className,
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
        <div className="w-fit rounded-2xl bg-black px-3 py-2 text-white shadow-sm hover:bg-neutral-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 font-semibold"
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
          className={`flex w-fit items-center space-x-2 font-semibold hover:underline ${className}`}
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
