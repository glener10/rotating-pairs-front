import { ListEnteredNames } from '@/components/atoms/ListEnteredNames';
import { Title } from '@/components/atoms/Title';
import { Box } from '@radix-ui/themes';

interface EnteredNamesProps {
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EnteredNames = (props: EnteredNamesProps): JSX.Element => {
  const { valuesArray, setInputNamesInArray } = props;
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', margin: '8px' }}>
      <Title title={'Entered Names'} numberValues={valuesArray.length} />
      <ListEnteredNames setInputNamesInArray={setInputNamesInArray} valuesArray={valuesArray} />
    </Box>
  );
};

export default EnteredNames;
