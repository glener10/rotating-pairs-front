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
      <Table.Cell style={{ fontSize: 'var(--size-text)' }}>{combination.PairOne}</Table.Cell>
      {combination.PairTwo == combination.PairOne ? (
        <Table.Cell></Table.Cell>
      ) : (
        <Table.Cell>{combination.PairTwo}</Table.Cell>
      )}
    </Table.Row>
  );
};

export default TableRow;
