import { SimpleButton } from '@/components/atoms/SimpleButton';
import { staticLogicReadCombinations } from '@/components/molecules/ButtonsCombinations/staticLogicDrawerJSON';
import { ISprint } from '@/interfaces/ISprint';
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

  return (
    <Box style={{ width: '60%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
      <SimpleButton
        onClick={(): void => generateCombinationsOfTheSprints()}
        disabled={inputNamesInArray.length > 1 ? false : true}
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
