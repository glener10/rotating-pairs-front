import { CombinationTable } from '@/components/molecules/CombinationTable';
import { ISprint } from '@/interfaces/ISprint';
import { Grid } from '@radix-ui/themes';

interface ListResultOfCombinationsProps {
  sprints: ISprint[];
}

export const ListResultOfCombinations = (props: ListResultOfCombinationsProps): JSX.Element => {
  const { sprints } = props;
  return (
    <Grid
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '60%',
        gap: '3px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {sprints.map((sprint: ISprint, index: number) => (
        <CombinationTable key={index} combinations={sprint.combinations} />
      ))}
    </Grid>
  );
};

export default ListResultOfCombinations;
