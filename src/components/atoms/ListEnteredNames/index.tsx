import { Cross1Icon } from '@radix-ui/react-icons';
import { Box, Button, Text } from '@radix-ui/themes';

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
    <ul>
      {valuesArray.map((value, index) => (
        <Box
          key={`div-${index}`}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '6px',
          }}
        >
          <Text as="span" key={index}>
            {value}
          </Text>
          <Button variant="soft" onClick={(): void => removingOneInput(value)}>
            <Cross1Icon />
          </Button>
        </Box>
      ))}
    </ul>
  );
};

export default ListEnteredNames;
