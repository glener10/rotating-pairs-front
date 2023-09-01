import ListEnteredNames from "@/components/atoms/ListEnteredNames";
import Title from "@/components/atoms/Title";


interface EnteredNamesProps{
  valuesArray: string[];
}

export const EnteredNames = (props: EnteredNamesProps) => { 
  return (
    <div>
        <Title title={"Entered Names"}/>
        <ListEnteredNames valuesArray={props.valuesArray}/>    
      </div>
  );
};


export default EnteredNames