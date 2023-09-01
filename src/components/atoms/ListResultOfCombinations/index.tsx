import { ISprint } from "@/components/organisms/Drawer";


interface ListResultOfCombinationsProps{
  sprints: ISprint[];
}

export const ListResultOfCombinations = (props: ListResultOfCombinationsProps) => { 
  return (
        <ul>
          {props.sprints.map((value, index) => {
            return (
              <p key={index}>{`\nSprint: ${index + 1}\n`}</p>
            );
          }
          )}
        </ul>
  );
};


export default ListResultOfCombinations;