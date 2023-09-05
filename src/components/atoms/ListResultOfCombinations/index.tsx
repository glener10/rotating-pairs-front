import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';

interface ListResultOfCombinationsProps {
  sprints: ISprint[];
}

export const ListResultOfCombinations = (props: ListResultOfCombinationsProps): JSX.Element => {
  const { sprints } = props;
  return (
    <>
      {sprints.map((sprint: ISprint, index: number) =>
        sprint.combinations.map((comb: ICombination, indexCombination: number) => {
          return (
            <ul key={`${index}-${indexCombination}`}>
              <p>{`\nSPRINT (${index + 1}): ${comb.pairOne} - ${comb.pairTwo}`}</p>
            </ul>
          );
        })
      )}
    </>
  );
};

export default ListResultOfCombinations;
