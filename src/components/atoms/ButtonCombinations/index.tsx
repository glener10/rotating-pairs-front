import { staticLogicReadCombinations } from '@/components/atoms/ButtonCombinations/staticLogicDrawerJSON';
import { ISprint } from '@/interfaces/ISprint';
import { Box, Button } from '@radix-ui/themes';

interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonCombinations = (props: ButtonCombinationsProps): JSX.Element => {
  const { inputNamesInArray, setSprints } = props;
  const generateCombinationsOfTheSprints = (): void => {
    const sprints = staticLogicReadCombinations(inputNamesInArray);
    setSprints(sprints);
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
        {'Generate Random Combinations'}
      </Button>
      <Button onClick={clearAllCombinations}>{'Clear All Combinations'}</Button>
    </Box>
  );
};

export default ButtonCombinations;
