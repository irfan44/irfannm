import { ReactNode } from 'react';

export interface TextProps {
  type: 'pageTitle' | 'sectionTitle';
  className?: string;
  children: ReactNode;
}
