import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';
import { Box, Button } from '@radix-ui/themes';

interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonCombinations = (props: ButtonCombinationsProps): JSX.Element => {
  const { inputNamesInArray, setSprints } = props;
  const generateCombinationsOfTheSprints = (): void => {
    const sprints = generateSprints();
    setSprints(sprints);
  };

  function generateSprints(): ISprint[] {
    const names = copyInputNamesInArray();

    const sprints: ISprint[] = [];
    const sprintCount = names.length - 1;

    for (let i = 0; i < sprintCount; i++) {
      const combinations: ICombination[] = [];

      for (let j = 0; j < names.length / 2; j++) {
        const name1 = names[j];
        const name2 = names[names.length - 1 - j];
        combinations.push({ pairOne: name1, pairTwo: name2 });
      }

      sprints.push({ combinations: combinations });
      const poppedValue = names.pop();
      if (poppedValue !== undefined) {
        names.splice(1, 0, poppedValue);
      }
    }

    return sprints;
  }

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
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
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
