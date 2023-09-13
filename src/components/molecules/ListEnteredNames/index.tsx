import { Name } from '@/components/molecules/Name';

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
    <>
      {valuesArray.map((value, index) => (
        <Name value={value} onClick={removingOneInput} key={index} />
      ))}
    </>
  );
};

export default ListEnteredNames;
