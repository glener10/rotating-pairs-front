import ListResultOfCombinations from "@/components/atoms/ListResultOfCombinations";
import ResultDescription from "@/components/atoms/ResultDescription";
import Title from "@/components/atoms/Title";
import { ISprint } from "@/interfaces/ISprint";

interface ResultOfCombinationsProps{
  sprints: ISprint[];
  numberOfSprints?: Number;
  numberOfCombinationPerSprint?: Number;
}

export const ResultOfCombinations = (props: ResultOfCombinationsProps) => { 
  return (
    <>
      <Title title={"Combinations"} />
      <ResultDescription description={`Number of Sprints: ${props.numberOfSprints}`} />
      <ResultDescription description={`Number of combinations per Sprint: ${props.numberOfCombinationPerSprint}`} />
      <ListResultOfCombinations sprints={props.sprints}/>
    </>
  );
};


export default ResultOfCombinations