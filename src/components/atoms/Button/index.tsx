interface ButtonProps{
  value: string;
  handleAddValues: () => void;
}

export const Button = (props: ButtonProps) => { 
  return (
      <button onClick={props.handleAddValues}>{props.value}</button>
  );
};

export default Button;