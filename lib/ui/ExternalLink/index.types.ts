import { ReactNode } from 'react';

export interface ExternalLinkProps {
  type: 'button' | 'text';
  title: string;
  href: string;
  className?: string;
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
