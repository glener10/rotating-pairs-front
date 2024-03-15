import { SimpleButton } from '@/components/atoms/SimpleButton';
import { staticLogicReadCombinations } from '@/components/molecules/ButtonsCombinations/staticLogicDrawerJSON';
import { ISprint } from '@/interfaces/ISprint';
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

  /* function checkIfBackEndIsConfigured(): boolean {
    if (process.env.NEXT_PUBLIC_SECRET && process.env.NEXT_PUBLIC_URL_BACK) {
      return true;
    }
    return false;
  } */

  const generateCombinationsOfTheSprints = (): void => {
    let sprints: ISprint[] = [];
    /* if (checkIfBackEndIsConfigured()) {
      const combinations = await CombinationsGateway(inputNamesInArray.length);
      if (!combinations) {
        const staticSprints = staticLogicReadCombinations(inputNamesInArray.length);
        if (staticSprints == null) {
          setSprints([]);
          return;
        }
        sprints = staticSprints;
      } else {
        sprints = combinations.Sprints;
      }
    } else { */
    const staticSprints = staticLogicReadCombinations(inputNamesInArray.length);
    if (staticSprints == null) {
      setSprints([]);
      return;
    }
    sprints = staticSprints;
    //}

    const shuffledInput = shuffleInput(inputNamesInArray);
    const combinationsConverted = convertCombinationsToInputNames(shuffledInput, sprints);
    setSprints(combinationsConverted);
  };

  const convertCombinationsToInputNames = (
    inputNamesInArray: string[],
    combinationsSprints: ISprint[]
  ): ISprint[] => {
    const convertedInput: ISprint[] = combinationsSprints.map((combination) => {
      return {
        Combinations: combination.Combinations.map((comb) => {
          return {
            PairOne: inputNamesInArray[Number(comb.PairOne)],
            PairTwo: inputNamesInArray[Number(comb.PairTwo)],
          };
        }),
      };
    });

    return convertedInput;
  };

  const shuffleInput = (inputNamesInArray: string[]): string[] => {
    const allInputsValues = inputNamesInArray.map((input) => {
      return input;
    });
    return allInputsValues.sort(() => Math.random() - 0.5);
  };

  const clearAllCombinations = (): void => {
    setSprints([]);
  };

  const disableButtonGenerateRandomCombination = (): boolean => {
    const maxInputs = 10;
    /* if (checkIfBackEndIsConfigured()) {
      maxInputs = 20;
    } */
    const haveMoreThanTwoInputs = inputNamesInArray.length > 1 ? true : false;
    const haveLessThanTwoTwentyInputs = inputNamesInArray.length <= maxInputs ? true : false;

    if (haveMoreThanTwoInputs && haveLessThanTwoTwentyInputs) {
      return false;
    }
    return true;
  };

  return (
    <Box style={{ width: '80%', display: 'flex', justifyContent: 'space-evenly' }}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <SimpleButton
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => generateCombinationsOfTheSprints()}
            disabled={disableButtonGenerateRandomCombination()}
            variant="solid"
          >
            {'Generate Random Combinations'}
          </SimpleButton>
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
            <p>Please add between 2 and 10 entries</p>
            <InfoCircledIcon style={{ marginLeft: '6px' }} />
          </Tooltip.Content>
        )}
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <SimpleButton
            disabled={props.sprints.length == 0 ? true : false}
            variant="solid"
            onClick={clearAllCombinations}
          >
            {'Clear All Combinations'}
          </SimpleButton>
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
