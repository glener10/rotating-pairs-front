import { ListResultOfCombinations } from '@/components/atoms/ListResultOfCombinations';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { Title } from '@/components/atoms/Title';
import { ISprint } from '@/interfaces/ISprint';
import { useEffect, useState } from 'react';

interface ResultOfCombinationsProps {
  sprints: ISprint[];
}

export const ResultOfCombinations = (props: ResultOfCombinationsProps): JSX.Element => {
  const [numberOfSprints, setNumberOfSprints] = useState<number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<number>();

  useEffect(() => {
    if (props.sprints && props.sprints.length > 0) {
      const numberOfSprints = props.sprints.length;
      const numberOfCombinationPerSprint = props.sprints[0].combinations.length;

      setNumberOfCombinationPerSprint(numberOfCombinationPerSprint);
      setNumberOfSprints(numberOfSprints);
    }
  }, [props.sprints]);

  return (
    <>
      <Title title={'Combinations'} />
      <ResultDescription description={`Number of Sprints: ${numberOfSprints}`} />
      <ResultDescription
        description={`Number of combinations per Sprint: ${numberOfCombinationPerSprint}`}
      />
      <ListResultOfCombinations sprints={props.sprints} />
    </>
  );
};

export default ResultOfCombinations;
