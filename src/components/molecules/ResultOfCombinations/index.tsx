import { ListResultOfCombinations } from '@/components/atoms/ListResultOfCombinations';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { Title } from '@/components/atoms/Title';
import { ISprint } from '@/interfaces/ISprint';
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
    <>
      <Title title={'Combinations'} />
      <ResultDescription description={`Number of Sprints: ${numberOfSprints}`} />
      <ResultDescription
        description={`Number of combinations per Sprint: ${numberOfCombinationPerSprint}`}
      />
      <ListResultOfCombinations sprints={sprints} />
    </>
  );
};

export default ResultOfCombinations;
