import { BasicText } from '@/components/atoms/BasicText';
import { Title } from '@/components/atoms/Title';
import { Box } from '@radix-ui/themes';

interface ResultOfCombinationsProps {
  numberOfSprints: number;
  numberOfCombinationPerSprint: number;
}

export const ResultOfCombinations = (props: ResultOfCombinationsProps): JSX.Element => {
  const { numberOfSprints, numberOfCombinationPerSprint } = props;

  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Title title={'Combinations'} />
      <BasicText>
        {`Number of Sprints: `} <strong>{numberOfSprints}</strong>
      </BasicText>

      <BasicText>
        {`Number of combinations per Sprint: `} <strong>{numberOfCombinationPerSprint}</strong>
      </BasicText>
    </Box>
  );
};

export default ResultOfCombinations;
