import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ListResultOfCombinations from "@/components/atoms/ListResultOfCombinations";
import ResultDescription from "@/components/atoms/ResultDescription";
import Title from "@/components/atoms/Title";
import { ISprint } from "@/components/organisms/Drawer";

interface ResultOfCombinationsProps{
  sprints: ISprint[];
  numberOfSprints?: Number;
  numberOfCombinationPerSprint?: Number;
}

export const ResultOfCombinations = (props: ResultOfCombinationsProps) => { 
  return (
    <>
      <Title title={"Combinations"} />
      <ResultDescription description={`\n\nNúmero de Sprints: ${props.numberOfSprints}`} />
      <ResultDescription description={`\n\nNúmero de Combinações por Sprint: ${props.numberOfCombinationPerSprint}`} />
      <ListResultOfCombinations sprints={props.sprints}/>
    </>
  );
};


export default ResultOfCombinations