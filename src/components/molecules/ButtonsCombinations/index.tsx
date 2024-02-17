import { SimpleButton } from '@/components/atoms/SimpleButton';
import { ISprint } from '@/interfaces/ISprint';
import { staticLogicReadCombinations } from '@/useCases/staticLogicDrawerJSON';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Box } from '@radix-ui/themes';

interface ButtonsCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
  sprints: ISprint[];
}

export const ButtonsCombinations = (props: ButtonsCombinationsProps): JSX.Element => {
  const { inputNamesInArray, setSprints, sprints } = props;
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
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div tabIndex={0}>
            <SimpleButton
              onClick={(): void => generateCombinationsOfTheSprints()}
              disabled={disableButtonGenerateRandomCombination()}
              variant="solid"
            >
              {'Generate Random Combinations'}
            </SimpleButton>
          </div>
        </Tooltip.Trigger>
        {disableButtonGenerateRandomCombination() && (
          <Tooltip.Content
            style={{
              background: '#333',
              color: '#fff',
              border: '1px solid #555',
              borderRadius: '4px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: 'fade-in 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'relative',
              top: '-20px',
            }}
          >
            <p>Please add between 2 and 20 entries</p>
            <InfoCircledIcon style={{ marginLeft: '6px' }} />
          </Tooltip.Content>
        )}
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div tabIndex={0}>
            <SimpleButton
              disabled={props.sprints.length == 0 ? true : false}
              variant="solid"
              onClick={clearAllCombinations}
            >
              {'Clear All Combinations'}
            </SimpleButton>
          </div>
        </Tooltip.Trigger>
        {sprints.length == 0 && (
          <Tooltip.Content
            style={{
              background: '#333',
              color: '#fff',
              border: '1px solid #555',
              borderRadius: '4px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              animation: 'fade-in 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              position: 'relative',
              top: '-20px',
            }}
          >
            <p>There is no combination to be cleared</p>
            <InfoCircledIcon style={{ marginLeft: '6px' }} />
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </Box>
  );
};

export default ButtonsCombinations;
