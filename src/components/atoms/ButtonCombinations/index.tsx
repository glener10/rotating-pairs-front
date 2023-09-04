import { ICombination } from "@/interfaces/ICombination";
import { ISprint } from "@/interfaces/ISprint";

interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonCombinations = (props: ButtonCombinationsProps) => { 

  const generateCombinations = () => {
    
    const numberOfNamesIsOdd = checkIfArrayIsOdd();
    const numberOfSprint = returnNumberOfSprints(numberOfNamesIsOdd);
    const numberOfCombinationPerSprint = returnNumberOfCombinationPerSprintRoundeddown(numberOfNamesIsOdd);

    const combinations: ISprint[] = [];
    const allInputsValues = props.inputNamesInArray.map((input) => { return input });
    
    let lastInputValue = null;

    if (numberOfCombinationPerSprint > 1 && !numberOfNamesIsOdd) {
      lastInputValue = allInputsValues.pop();
    }

    for (let indexA = 0; indexA < Number(numberOfSprint); indexA++){
      const comb: ICombination[] = [];
      for (let indexB = 0; indexB < Number(numberOfCombinationPerSprint); indexB++) {
        if (numberOfCombinationPerSprint > 1 && indexB == numberOfCombinationPerSprint - 1) {
          comb.push({ pairOne: allInputsValues.pop()!, pairTwo: "EMPTY" });
        } else {
          comb.push({ pairOne: "", pairTwo: "" });
        }
      }
      combinations.push({ combinations:comb });
    }

    const allCombinationsPossible = generateAllCombinationsPossible();

    const sizeOfLoop = lastInputValue != null ? Number(numberOfCombinationPerSprint) - 1 : numberOfNamesIsOdd ? Number(numberOfCombinationPerSprint) -1 : Number(numberOfCombinationPerSprint);

    combinations.map((combination, index) => {
        for (let indexA = 0; indexA < sizeOfLoop; indexA++){
          let fix = false;
          let indexAllCombinationsPossible = 0;
          while (fix == false && indexAllCombinationsPossible < allCombinationsPossible.length) {
            const combinationOfAllCombinationsPossible = allCombinationsPossible[indexAllCombinationsPossible];
              if (!checkIfAnyEntriesExistingInACurrentSprintCombination(combinationOfAllCombinationsPossible?.pairOne!, combinationOfAllCombinationsPossible?.pairTwo!, combination.combinations)) {
                combination.combinations[indexA].pairOne = combinationOfAllCombinationsPossible?.pairOne!;
                combination.combinations[indexA].pairTwo = combinationOfAllCombinationsPossible?.pairTwo!;
                allCombinationsPossible.splice(indexAllCombinationsPossible, 1);
                fix = true;
              }
            indexAllCombinationsPossible += 1;
          }

          if (fix == false) {
            const lastCombination = combination.combinations.pop();
            combination.combinations.sort(() => Math.random() - 0.5);
            combination.combinations.push(lastCombination!);
            for (let indexCleanCombinations = 0; indexCleanCombinations < sizeOfLoop; indexCleanCombinations++) {
              if (combination.combinations[indexCleanCombinations].pairOne != "" && combination.combinations[indexCleanCombinations].pairTwo != "") {
                allCombinationsPossible.push({ pairOne: combination.combinations[indexCleanCombinations].pairOne, pairTwo: combination.combinations[indexCleanCombinations].pairTwo });
                combination.combinations[indexCleanCombinations].pairOne = "";
                combination.combinations[indexCleanCombinations].pairTwo = "";
              }
            }
            indexA = -1;
          }
      }
    })
    
    if (lastInputValue != null) {
      combinations.map((combination) => { 
        combination.combinations[numberOfCombinationPerSprint - 1].pairTwo = lastInputValue!;
      });
    }

    props.setSprints(combinations);
  }

  const generateAllCombinationsPossible = () => {
    const allCombinationsPossible: ICombination[] = [];

    const numberOfNamesIsOdd = props.inputNamesInArray.length % 2 == 0 ? false : true;

    props.inputNamesInArray.map((inputInArrayA,indexA) => {
      props.inputNamesInArray.map((inputInArrayB,indexB) => {
        if (!numberOfNamesIsOdd && props.inputNamesInArray.length > 3) {
          if (inputInArrayA != inputInArrayB && (indexA < props.inputNamesInArray.length-1 && indexB < props.inputNamesInArray.length-1)) {
            allCombinationsPossible.push({ pairOne: inputInArrayA, pairTwo: inputInArrayB })
          }
        } else {
          if (inputInArrayA != inputInArrayB) {
            allCombinationsPossible.push({ pairOne: inputInArrayA, pairTwo: inputInArrayB })
          }
        }
        
      })
    });

    allCombinationsPossible.map((combinationA, indexA) => {
        allCombinationsPossible.map((combinationB, indexB) => {
          if (indexA != indexB && (combinationA.pairOne == combinationB.pairOne || combinationA.pairOne == combinationB.pairTwo) && (combinationA.pairTwo == combinationB.pairOne || combinationA.pairTwo == combinationB.pairTwo)) {
            allCombinationsPossible.splice(indexB, 1); 
          }
        });
    });
    return allCombinationsPossible;
  }

  function checkIfAnyEntriesExistingInACurrentSprintCombination(pairOne: string, pairTwo: string, combinations: ICombination[]) { 
    let entriesExistingInACombination = false;
    combinations.map((comb) => {
      if (comb.pairOne == pairOne || comb.pairOne == pairTwo || comb.pairTwo == pairOne || comb.pairTwo == pairTwo) {
        entriesExistingInACombination = true;
      }
    });
    return entriesExistingInACombination;
  }

  const checkIfArrayIsOdd = (): boolean => {
    return props.inputNamesInArray.length % 2 == 0 ? false : true;
  }

  const returnNumberOfSprints = (numberOfNamesIsOdd: boolean): number => {
    let numberOfSprints = props.inputNamesInArray.length - 1;

    if (numberOfNamesIsOdd) {
      numberOfSprints += 1;
    }

    return numberOfSprints;
  }

  const returnNumberOfCombinationPerSprintRoundeddown = (numberOfNamesIsOdd: boolean): number => {
    let numberOfCombinationPerSprint = props.inputNamesInArray.length / 2;

    if (numberOfNamesIsOdd) {
      numberOfCombinationPerSprint += 1;
    }

    return numberOfCombinationPerSprint;
  }


  return (
    <button onClick={() => generateCombinations()} {...props} disabled={props.inputNamesInArray.length > 1 ? false : true}>{props.title}</button>
  );
};

export default ButtonCombinations;