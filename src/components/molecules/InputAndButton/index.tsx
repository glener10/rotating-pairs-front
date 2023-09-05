import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Dispatch, SetStateAction, useState } from 'react';

interface InputAndButtonProps {
  setInputNamesInArray: Dispatch<SetStateAction<string[]>>;
}

export const InputAndButton = (props: InputAndButtonProps): JSX.Element => {
  const { setInputNamesInArray } = props;
  const [boxInputNames, setBoxInputNames] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }): void => {
    setBoxInputNames(event.target.value);
  };

  const handleAddValues = (): void => {
    const newValues = boxInputNames.split('\n').map((value) => value.trim());
    const nonEmptyValues = newValues.filter((value) => value !== '');

    if (nonEmptyValues.length > 0) {
      setInputNamesInArray((prevArray) => putSignageOnEqualNames(prevArray, nonEmptyValues));
      setBoxInputNames('');
    }
  };

  const putSignageOnEqualNames = (values: string[], newNonEmptyValues: string[]): string[] => {
    const valuesWithSignage = [...values, ...newNonEmptyValues];

    valuesWithSignage.map((value, index) => {
      if (value.includes('[') && value.includes(']')) {
        valuesWithSignage[index] = value.split(' ')[0];
      }
    });

    valuesWithSignage.map((valueA, indexA) => {
      let contEqualValues = 2;
      let putDifferentialInValueA = false;
      valuesWithSignage.map((valueB, indexB) => {
        if (valueA == valueB && indexA != indexB) {
          putDifferentialInValueA = true;
          valuesWithSignage[indexB] = `${valueB} [${contEqualValues}]`;
          contEqualValues += 1;
        }
      });
      if (putDifferentialInValueA) {
        valuesWithSignage[indexA] = `${valueA} [1]`;
      }
    });
    return valuesWithSignage;
  };

  const clearAll = (): void => {
    setInputNamesInArray([]);
  };

  return (
    <>
      <Input
        value={boxInputNames}
        onChange={handleInputChange}
        placeholder="Enter values separated by a line break"
        rows={5}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button onClick={handleAddValues} title={'Save Inputs'} />
        <Button onClick={clearAll} title={'Clear All'} />
      </div>
    </>
  );
};

export default InputAndButton;
