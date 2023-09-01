import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

interface InputAndButtonProps{
  inputValue: string;
  handleInputChange: (event: { target: { value: React.SetStateAction<string>; }; })=>void;
  handleAddValues: () => void;
}

export const InputAndButton = (props: InputAndButtonProps) => { 
  return (
    <>
      <Input inputValue={props.inputValue} handleInputChange={props.handleInputChange} />
      <Button handleAddValues={props.handleAddValues} value={"Salvar"} />
    </>
  );
};


export default InputAndButton