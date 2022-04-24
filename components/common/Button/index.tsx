import { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
