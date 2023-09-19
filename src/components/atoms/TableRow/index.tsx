import { ICombination } from '@/interfaces/ICombination';
import { Table } from '@radix-ui/themes';
import { TableRootProps } from '@radix-ui/themes/dist/cjs/components/table';

interface TableRowProps extends TableRootProps {
  combination: ICombination;
}

export const TableRow = (props: TableRowProps): JSX.Element => {
  const { combination } = props;
  return (
    <Table.Row>
      <Table.Cell style={{ fontSize: 'var(--size-text)' }}>{combination.pairOne}</Table.Cell>
      {combination.pairTwo == combination.pairOne ? (
        <Table.Cell></Table.Cell>
      ) : (
        <Table.Cell>{combination.pairTwo}</Table.Cell>
      )}
    </Table.Row>
  );
};

export default TableRow;
