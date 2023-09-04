import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { Dispatch, SetStateAction, useState } from "react";

interface InputAndButtonProps{
  setInputNamesInArray: Dispatch<SetStateAction<string[]>>;
}

export const InputAndButton = (props: InputAndButtonProps) => { 
  const [boxInputNames, setBoxInputNames] = useState(''); 

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setBoxInputNames(event.target.value);
  };

  const handleAddValues = () => {
    const newValues = boxInputNames.split('\n').map((value) => value.trim());
    const nonEmptyValues = newValues.filter((value) => value !== '');

    if (nonEmptyValues.length > 0) {
      //@ts-ignore
      props.setInputNamesInArray((prevArray) => putSignageOnEqualNames(prevArray,nonEmptyValues));
      setBoxInputNames('');
    }
  };

  const putSignageOnEqualNames = (values: string[], newNonEmptyValues: string[]): string[] => {
    const valuesWithSignage = [...values, ...newNonEmptyValues];
    valuesWithSignage.map((valueA, indexA) => {
      let contEqualValues = 2;
      let putDifferentialInValueA = false;
      valuesWithSignage.map((valueB,indexB) => {
        if (valueA == valueB && indexA != indexB) {
          putDifferentialInValueA = true;
          valuesWithSignage[indexB] = `${valueB} [${contEqualValues}]`;
          contEqualValues += 1;
        }
      })
      if (putDifferentialInValueA) {
        valuesWithSignage[indexA] = `${valueA} [1]`;
      }
    })
    return valuesWithSignage;
  }
  
  return (
    <>
      <Input boxInputNames={boxInputNames} handleInputChange={handleInputChange} />
      <Button onClick={handleAddValues} title={"Save Inputs"} />
    </>
  );
};


export default InputAndButton