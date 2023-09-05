interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { title, ...rest } = props;
  return <button {...rest}>{title}</button>;
};

export default Button;
