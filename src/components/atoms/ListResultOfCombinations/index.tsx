import { ICombination } from "@/interfaces/ICombination";
import { ISprint } from "@/interfaces/ISprint";


interface ListResultOfCombinationsProps{
  sprints: ISprint[];
}

export const ListResultOfCombinations = (props: ListResultOfCombinationsProps) => { 
  return (
  <>
    {props.sprints.map((sprint: ISprint, index:number) => sprint.combinations.map((comb: ICombination) => {
      return (
        <ul key={index}>
          <p>{`\nSPRINT (${index + 1}): ${comb.pairOne} - ${comb.pairTwo}`}</p>
        </ul>
      );
    }))
      }
    </>
  );
};


export default ListResultOfCombinations;