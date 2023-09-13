import { ICombination } from '@/interfaces/ICombination';
import { Table } from '@radix-ui/themes';

interface TableRowProps {
  combination: ICombination;
  key: number;
}

export const TableRow = (props: TableRowProps): JSX.Element => {
  const { combination, key } = props;
  return (
    <Table.Row key={key}>
      <Table.Cell>{combination.pairOne}</Table.Cell>
      {combination.pairTwo == combination.pairOne ? (
        <Table.Cell></Table.Cell>
      ) : (
        <Table.Cell>{combination.pairTwo}</Table.Cell>
      )}
    </Table.Row>
  );
};

export default TableRow;
