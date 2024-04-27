import { ReactNode } from 'react';

interface Props {
  type: 'pageTitle' | 'sectionTitle';
  className?: string;
  children: ReactNode;
}

const Text = ({ type, className, children }: Props) => {
  switch (type) {
    case 'pageTitle':
      return (
        <h1
          className={`font-sans text-4xl font-bold md:text-5xl tracking-tighter leading-tight text-black dark:text-white ${
            className ? className : ''
          }`}
        >
          {children}
        </h1>
      );
    case 'sectionTitle':
      return (
        <h2
          className={`font-sans text-2xl font-bold md:text-4xl tracking-tighter leading-tight text-black dark:text-white ${
            className ? className : ''
          }`}
        >
          {children}
        </h2>
      );
    default:
      return <h1></h1>;
  }
};

export default Text;
