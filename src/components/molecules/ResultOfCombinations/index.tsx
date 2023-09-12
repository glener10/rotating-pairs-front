import { ListResultOfCombinations } from '@/components/atoms/ListResultOfCombinations';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { Title } from '@/components/atoms/Title';
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
      <ResultDescription description={`Number of Sprints: ${numberOfSprints}`} />
      <ResultDescription
        description={`Number of combinations per Sprint: ${numberOfCombinationPerSprint}`}
      />
      <ListResultOfCombinations sprints={sprints} />
    </Box>
  );
};

export default ResultOfCombinations;
