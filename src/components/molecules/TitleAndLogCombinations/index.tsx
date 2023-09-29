import { BasicText } from '@/components/atoms/BasicText';
import { Title } from '@/components/atoms/Title';
import { Box } from '@radix-ui/themes';

interface TitleAndLogCombinationsprops {
  numberOfSprints: number;
  numberOfCombinationPerSprint: number;
}

export const TitleAndLogCombinations = (props: TitleAndLogCombinationsprops): JSX.Element => {
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
      <Title>{'Generated Random Combinations'}</Title>
      <BasicText>
        {`Number of Sprints: `} <strong>{numberOfSprints}</strong>
      </BasicText>

      <BasicText>
        {`Number of combinations per Sprint: `} <strong>{numberOfCombinationPerSprint}</strong>
      </BasicText>
    </Box>
  );
};

export default TitleAndLogCombinations;
