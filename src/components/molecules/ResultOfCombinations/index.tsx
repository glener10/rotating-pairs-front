import { BasicText } from '@/components/atoms/BasicText';
import { Title } from '@/components/atoms/Title';
import { ListResultOfCombinations } from '@/components/molecules/ListResultOfCombinations';
import { ISprint } from '@/interfaces/ISprint';
import { Box } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

interface ResultOfCombinationsProps {
  sprints: ISprint[];
}

export const ResultOfCombinations = (props: ResultOfCombinationsProps): JSX.Element => {
  const { sprints } = props;
  const [numberOfSprints, setNumberOfSprints] = useState<number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<number>();

  useEffect(() => {
    if (sprints && sprints.length > 0) {
      const numberOfSprints = sprints.length;
      const numberOfCombinationPerSprint = sprints[0].combinations.length;

      setNumberOfCombinationPerSprint(numberOfCombinationPerSprint);
      setNumberOfSprints(numberOfSprints);
    }
  }, [sprints]);

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

      <ListResultOfCombinations sprints={sprints} />
    </Box>
  );
};

export default ResultOfCombinations;
