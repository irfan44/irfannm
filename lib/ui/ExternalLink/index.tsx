import { FC } from 'react';
import { ExternalLinkProps } from './index.types';

const ExternalLink: FC<ExternalLinkProps> = ({
  type,
  title,
  href,
  className,
  children,
  iconLeft,
  iconRight,
  ...props
}) => {
  switch (type) {
    case 'button':
      return (
        <div className="w-fit bg-black py-2 px-3 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={
              className
                ? className
                : `flex items-center font-semibold space-x-2`
            }
            title={title}
            href={href}
            {...props}
          >
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </a>
        </div>
      );
    case 'text':
      return (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={
            className
              ? className
              : `w-fit flex items-center font-semibold space-x-2`
          }
          title={title}
          href={href}
          {...props}
        >
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </a>
      );
    default:
      return <a {...props}>{children}</a>;
  }
};

export default ExternalLink;
