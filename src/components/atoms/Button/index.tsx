interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <button {...props}>{props.title}</button>;
};

export default Button;
