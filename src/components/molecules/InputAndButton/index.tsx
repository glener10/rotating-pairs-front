import { Input } from '@/components/atoms/Input';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleToast } from '@/components/atoms/SimpleToast';
import { Box } from '@radix-ui/themes';
import { Dispatch, SetStateAction, useState } from 'react';

interface InputAndButtonProps {
  inputNamesInArray: string[];
  setInputNamesInArray: Dispatch<SetStateAction<string[]>>;
}

export const InputAndButton = (props: InputAndButtonProps): JSX.Element => {
  const { inputNamesInArray, setInputNamesInArray } = props;
  const [boxInputNames, setBoxInputNames] = useState('');
  const [warningToastOpen, setWarningToastOpen] = useState(false);

  const [toastTitle, setToastTitle] = useState('');
  const [toastDescription, setToastDescription] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }): void => {
    setBoxInputNames(event.target.value);
  };

  const handleAddValues = (): void | JSX.Element => {
    if (boxInputNames == '') {
      setToastTitle('Ops!');
      setToastDescription('You need to enter at least one value in the input field.');
      setWarningToastOpen(true);
      return;
    }
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
        let nameWithoutBrackets = '';
        for (let index = 0; index < value.length; index++) {
          if (value[index] == '[') {
            break;
          }
          nameWithoutBrackets += value[index];
        }
        valuesWithSignage[index] = nameWithoutBrackets.trim();
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
    if (inputNamesInArray.length == 0) {
      setToastTitle('Ops!');
      setToastDescription('There are no saved entries to remove.');
      setWarningToastOpen(true);
      return;
    }
    setInputNamesInArray([]);
  };

  return (
    <Box style={{ width: '80%' }}>
      {warningToastOpen && (
        <SimpleToast
          setOpen={setWarningToastOpen}
          open={warningToastOpen}
          title={toastTitle}
          description={toastDescription}
        />
      )}
      <Input
        value={boxInputNames}
        onChange={handleInputChange}
        placeholder="Enter values separated by a line break..."
      />
      <Box style={{ display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
        <SimpleButton onClick={handleAddValues}>{'Save Inputs'}</SimpleButton>
        <SimpleButton onClick={clearAll}>{'Clear All Inputs'}</SimpleButton>
      </Box>
    </Box>
  );
};

export default InputAndButton;
