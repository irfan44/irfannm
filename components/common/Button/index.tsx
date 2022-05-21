import { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, title, onClick }: Props) => {
  return (
    <button title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
