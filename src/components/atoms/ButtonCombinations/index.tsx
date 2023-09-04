interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  inputNamesInArray: string[];
}

export const ButtonCombinations = (props: ButtonCombinationsProps) => { 
  return (
    <button {...props} disabled={props.inputNamesInArray.length > 1 ? false : true}>{props.title}</button>
  );
};

export default ButtonCombinations;