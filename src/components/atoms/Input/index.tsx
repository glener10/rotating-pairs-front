interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input = (props: InputProps): JSX.Element => {
  const { ...rest } = props;
  return <textarea {...rest} />;
};

export default Input;
