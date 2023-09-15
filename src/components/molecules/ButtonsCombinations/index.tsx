import { SimpleButton } from '@/components/atoms/SimpleButton';
import { ISprint } from '@/interfaces/ISprint';
import { staticLogicReadCombinations } from '@/useCases/staticLogicDrawerJSON';
import { Box } from '@radix-ui/themes';

interface ButtonsCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonsCombinations = (props: ButtonsCombinationsProps): JSX.Element => {
  const { inputNamesInArray, setSprints } = props;
  const generateCombinationsOfTheSprints = (): void => {
    const sprints = staticLogicReadCombinations(inputNamesInArray);
    setSprints(sprints);
  };

  const clearAllCombinations = (): void => {
    setSprints([]);
  };

  const disableButtonGenerateRandomCombination = (): boolean => {
    const haveMoreThanTwoInputs = inputNamesInArray.length > 1 ? true : false;
    const haveLessThanTwoTwentyInputs = inputNamesInArray.length <= 20 ? true : false;

    if (haveMoreThanTwoInputs && haveLessThanTwoTwentyInputs) {
      return false;
    }
    return true;
  };

  return (
    <Box style={{ width: '60%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
      <SimpleButton
        onClick={(): void => generateCombinationsOfTheSprints()}
        disabled={disableButtonGenerateRandomCombination()}
        variant="solid"
      >
        {'Generate Random Combinations'}
      </SimpleButton>
      <SimpleButton variant="solid" onClick={clearAllCombinations}>
        {'Clear All Combinations'}
      </SimpleButton>
    </Box>
  );
};

export default ButtonsCombinations;
