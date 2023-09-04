"use client";
import EnteredNames from '@/components/molecules/EnteredNames';
import Input, { InputAndButton } from '@/components/molecules/InputAndButton';
import ResultOfCombinations from '@/components/molecules/ResultOfCombinations';
import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';
import React, { useState } from 'react';

export const Drawer = () => {
  const [boxInputNames, setBoxInputNames] = useState(''); 
  const [inputNamesInArray, setInputNamesInArray] = useState([]);

  const [numberOfSprints, setNumberOfSprints] = useState<Number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<Number>();

  const [sprints, setSprints] = useState<ISprint[]>([]);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setBoxInputNames(event.target.value);
  };

  const handleAddValues = () => {
    const newValues = boxInputNames.split('\n').map((value) => value.trim());
    const nonEmptyValues = newValues.filter((value) => value !== '');

    if (nonEmptyValues.length > 0) {
      //@ts-ignore
      setInputNamesInArray((prevArray) => [...prevArray, ...nonEmptyValues]);
      setBoxInputNames('');
    }
  };

  const generateAllCombinationsPossible = () => {
    const allCombinationsPossible: ICombination[] = [];
    inputNamesInArray.map((inputInArrayA) => {
      inputNamesInArray.map((inputInArrayB) => {
        if (inputInArrayA != inputInArrayB) {
          allCombinationsPossible.push({ pairOne: inputInArrayA, pairTwo: inputInArrayB })
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

  const generateCombinations = (numberOfSprint:number, numberOfCombinationPerSprint:number, numberOfNamesIsOdd:boolean) => {
    const combinations: ISprint[] = [];
    const allInputsValues = inputNamesInArray.map((input) =>{return input });

    for (let a = 0; a < Number(numberOfSprint); a++){
      const comb: ICombination[] = [];
      for (let b = 0; b < Number(numberOfCombinationPerSprint); b++) {
        if (numberOfNamesIsOdd && b == numberOfCombinationPerSprint - 1) {
          comb.push({ pairOne: allInputsValues.pop()!, pairTwo: "EMPTY" });
        } else {
          comb.push({ pairOne: "", pairTwo: "" });
        }
      }
      combinations.push({ combinations:comb });
    }

    const allComb = generateAllCombinationsPossible();

    combinations.map((combination) => {
      combination.combinations.map((comb) => {
        if (comb.pairTwo != "EMPTY") {
          let fix = false;
          let indexX = 0;
          while (fix == false) {
            const combX = allComb[indexX];
            if (!combX) {
              console.log("AQUI");
            }
            
            if (!checkIfEntryExistsInAtLeastOneCombinationInSprints(combX?.pairOne!, combX?.pairTwo!, combinations)) {
              if (!checkIfAnyEntriesExistingInACurrentSprintCombination(combX?.pairOne!, combX?.pairTwo!, combination.combinations)) {
                comb.pairOne = combX?.pairOne!;
                comb.pairTwo = combX?.pairTwo!;
                allComb.splice(0, 1);
                fix = true;
              }
            }
            indexX += 1;
          }
        }
      })
    })

    setSprints(combinations);
  }

  function checkIfEntryExistsInAtLeastOneCombinationInSprints(pairOne: string, pairTwo: string, combinations: ISprint[]) {
    let combinationInputExistingAtLeastOneCombinationInSprints = false;
    combinations.map((combination) => {
      combination.combinations.map((comb) => {
        if ((comb.pairOne == pairOne || comb.pairOne == pairTwo) && (comb.pairTwo == pairOne || comb.pairTwo == pairTwo)) {
          combinationInputExistingAtLeastOneCombinationInSprints = true;
        }
      });
    });
    return combinationInputExistingAtLeastOneCombinationInSprints;
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

  const generate = () => {

    const numberOfNamesIsOdd = inputNamesInArray.length % 2 == 0 ? false : true;
    let numberOfSprints = inputNamesInArray.length - 1;
    let numberOfCombinationPerSprint = inputNamesInArray.length / 2;

    if (numberOfNamesIsOdd) {
      numberOfSprints += 1;
      numberOfCombinationPerSprint += 1;
    }

    const numberOfCombinationPerSprintRoundeddown = Math.floor(numberOfCombinationPerSprint);

    setNumberOfCombinationPerSprint(numberOfCombinationPerSprintRoundeddown);
    setNumberOfSprints(numberOfSprints);

    generateCombinations(numberOfSprints, numberOfCombinationPerSprintRoundeddown, numberOfNamesIsOdd);
  };

  return (
    <div style={{ zIndex: 1 }}>
      <InputAndButton inputValue={boxInputNames} handleInputChange={handleInputChange} handleAddValues={handleAddValues} />
      <EnteredNames valuesArray={inputNamesInArray} />
      
      <div>
        <button onClick={() => generate()}>Generate Combinations</button>
        <ResultOfCombinations sprints={sprints} numberOfSprints={numberOfSprints} numberOfCombinationPerSprint={numberOfCombinationPerSprint} />
      </div>
    </div>
  );
};

export default Drawer;