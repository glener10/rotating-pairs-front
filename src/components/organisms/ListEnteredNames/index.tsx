import { Title } from '@/components/atoms/Title';
import { Name } from '@/components/molecules/Name';
import { Box } from '@radix-ui/themes';

interface ListEnteredNamesProps {
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ListEnteredNames = (props: ListEnteredNamesProps): JSX.Element => {
  const { valuesArray, setInputNamesInArray } = props;
  const removingOneInput = (value: string): void => {
    const index = valuesArray.indexOf(value);
    if (index !== -1) {
      const newArray = [...valuesArray];
      newArray.splice(index, 1);
      setInputNamesInArray(newArray);
    }
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', margin: '8px' }}>
      <Title>
        {'Entered Names ['}
        <strong>{valuesArray.length}</strong>
        {']'}
      </Title>
      {valuesArray.map((value, index) => (
        <Name value={value} onClick={removingOneInput} key={index} />
      ))}
    </Box>
  );
};

export default ListEnteredNames;
