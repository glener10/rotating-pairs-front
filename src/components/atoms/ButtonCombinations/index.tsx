import { generateCombinations } from '@/components/atoms/ButtonCombinations/logicalDrawer';
import { ISprint } from '@/interfaces/ISprint';
import { Box, Button } from '@radix-ui/themes';

interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonCombinations = (props: ButtonCombinationsProps): JSX.Element => {
  const { inputNamesInArray, setSprints } = props;
  const generateCombinationsOfTheSprints = (): void => {
    const names = copyInputNamesInArray();
    const sprints = generateCombinations(names);
    setSprints(sprints);
  };

  const copyInputNamesInArray = (): string[] => {
    const allInputsValues = inputNamesInArray.map((input) => {
      return input;
    });
    return allInputsValues;
  };

  const clearAllCombinations = (): void => {
    setSprints([]);
  };

  return (
    <Box style={{ width: '60%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
      <Button
        onClick={(): void => generateCombinationsOfTheSprints()}
        disabled={inputNamesInArray.length > 1 ? false : true}
      >
        {'Generate Combinations'}
      </Button>
      <Button onClick={clearAllCombinations}>{'Clear All Combinations'}</Button>
    </Box>
  );
};

export default ButtonCombinations;
