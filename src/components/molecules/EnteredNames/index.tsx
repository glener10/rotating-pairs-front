import { ListEnteredNames } from '@/components/atoms/ListEnteredNames';
import { Title } from '@/components/atoms/Title';

interface EnteredNamesProps {
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EnteredNames = (props: EnteredNamesProps): JSX.Element => {
  const { valuesArray, setInputNamesInArray } = props;
  return (
    <div>
      <Title title={'Entered Names'} />
      <ListEnteredNames setInputNamesInArray={setInputNamesInArray} valuesArray={valuesArray} />
    </div>
  );
};

export default EnteredNames;
