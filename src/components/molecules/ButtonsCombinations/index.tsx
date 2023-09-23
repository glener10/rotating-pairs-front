import { SimpleButton } from '@/components/atoms/SimpleButton';
import { ISprint } from '@/interfaces/ISprint';
import { staticLogicReadCombinations } from '@/useCases/staticLogicDrawerJSON';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';
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
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', margin: '15px' }}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span tabIndex={0}>
            <SimpleButton
              onClick={(): void => generateCombinationsOfTheSprints()}
              disabled={disableButtonGenerateRandomCombination()}
              variant="solid"
              style={{ pointerEvents: 'auto' }}
            >
              {'Generate Random Combinations'}
            </SimpleButton>
          </span>
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
              display: 'flex', // Usar flexbox para colocar o texto e o ícone na mesma linha
              alignItems: 'center', // Alinhar verticalmente ao centro
              justifyContent: 'space-between', // Espaço igual entre o texto e o ícone
              flexDirection: 'row', // Colocar o texto e o ícone na mesma linha
              position: 'relative', // Para controlar a posição vertical
              top: '-20px', // Ajustar a posição vertical para cima
            }}
          >
            <p>Please add between 2 and 20 entries</p>
            <InfoCircledIcon style={{ marginLeft: '6px' }} />
          </Tooltip.Content>
        )}
      </Tooltip.Root>
      <SimpleButton variant="solid" onClick={clearAllCombinations}>
        {'Clear All Combinations'}
      </SimpleButton>
    </Box>
  );
};

export default ButtonsCombinations;
