import Title from "@/components/atoms/Title";


interface ListEnteredNamesProps{
  valuesArray: string[];
}

export const ListEnteredNames = (props: ListEnteredNamesProps) => { 
  return (
        <ul>
          {props.valuesArray.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        
  );
};


export default ListEnteredNames