import { CombinationTable } from '@/components/molecules/CombinationTable';
import { ISprint } from '@/interfaces/ISprint';
import { Grid } from '@radix-ui/themes';

interface ListCombinationsProps {
  sprints: ISprint[];
}

export const ListCombinations = (props: ListCombinationsProps): JSX.Element => {
  const { sprints } = props;
  return (
    <Grid
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '3px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {sprints.map((sprint: ISprint, index: number) => (
        <CombinationTable key={index} sprintIndex={index + 1} combinations={sprint.combinations} />
      ))}
    </Grid>
  );
};

export default ListCombinations;
