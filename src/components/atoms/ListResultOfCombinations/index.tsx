import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';
import { Text } from '@radix-ui/themes';

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
            <Text as="p" key={`${index}-${indexCombination}`}>
              {`\nSPRINT (${index + 1}): ${comb.pairOne} - ${comb.pairTwo}`}
            </Text>
          );
        })
      )}
    </>
  );
};

export default ListResultOfCombinations;
