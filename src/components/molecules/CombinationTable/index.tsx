import { TableRow } from '@/components/atoms/TableRow';
import { ICombination } from '@/interfaces/ICombination';
import { Table } from '@radix-ui/themes';

interface CombinationTableProps {
  combinations: ICombination[];
  sprintIndex: number;
}

export const CombinationTable = (props: CombinationTableProps): JSX.Element => {
  const { combinations, sprintIndex } = props;
  return (
    <Table.Root variant="surface" style={{ margin: '15px' }} key={sprintIndex - 1}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>{'Sprint: '}</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>
            <strong>{sprintIndex}</strong>
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {combinations.map((comb: ICombination, indexCombination: number) => (
          <TableRow key={indexCombination} combination={comb} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default CombinationTable;
