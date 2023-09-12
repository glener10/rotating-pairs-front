import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';
import { Grid, Table } from '@radix-ui/themes';

interface ListResultOfCombinationsProps {
  sprints: ISprint[];
}

export const ListResultOfCombinations = (props: ListResultOfCombinationsProps): JSX.Element => {
  const { sprints } = props;
  return (
    <Grid columns="3" gap="3" width="auto">
      {sprints.map((sprint: ISprint, index: number) => (
        <Table.Root variant="surface" style={{ margin: '20px' }} key={index}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>{'Sprint: '}</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <strong>{index + 1}</strong>
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sprint.combinations.map((comb: ICombination, indexCombination: number) => (
              <Table.Row key={indexCombination}>
                <Table.Cell>{comb.pairOne}</Table.Cell>
                {comb.pairTwo == comb.pairOne ? (
                  <Table.Cell></Table.Cell>
                ) : (
                  <Table.Cell>{comb.pairTwo}</Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ))}
    </Grid>
  );
};

export default ListResultOfCombinations;
