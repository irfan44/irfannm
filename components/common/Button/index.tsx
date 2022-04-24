type Props = {
  text: String;
};

const Button = ({ text }: Props) => {
  return <button>{text}</button>;
};

export default Button;
