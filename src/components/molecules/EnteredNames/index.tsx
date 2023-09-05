import ListEnteredNames from "@/components/atoms/ListEnteredNames";
import Title from "@/components/atoms/Title";


interface EnteredNamesProps{
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const EnteredNames = (props: EnteredNamesProps) => { 
  return (
    <div>
        <Title title={"Entered Names"}/>
        <ListEnteredNames setInputNamesInArray={props.setInputNamesInArray} valuesArray={props.valuesArray}/>    
    </div>
  );
};


export default EnteredNames