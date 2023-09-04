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

  const [sprints, setSprints] = useState<ISprint[]>([]);

  const [numberOfSprints, setNumberOfSprints] = useState<Number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<Number>();

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

  const generateAllCombinationsPossible = (numberOfNamesIsOdd: boolean) => {
    const allCombinationsPossible: ICombination[] = [];
    inputNamesInArray.map((A) => {
      inputNamesInArray.map((B) => {
        if (A != B) {
          allCombinationsPossible.push({pairOne: A, pairTwo:B})
        }
      })
    })
    if (numberOfNamesIsOdd) {
      inputNamesInArray.map((A) => {
          allCombinationsPossible.push({pairOne: A, pairTwo: "EMPTY"})
      })
    }
    return allCombinationsPossible;
  }

  const generateCombinations = (numberOfSprint:number, numberOfCombinationPerSprin:number, numberOfNamesIsOdd:boolean) => {
    const combinations: ISprint[] = [];
    for (let a = 0; a < Number(numberOfSprint); a++){
      const comb: ICombination[] = [];
      for (let b = 0; b < Number(numberOfCombinationPerSprin); b++) { 
        comb.push({ pairOne: "", pairTwo: "" });
      }
      combinations.push({ combinations:comb });
    }

    const allComb = generateAllCombinationsPossible(numberOfNamesIsOdd);

    combinations.map((combination) => {
      combination.combinations.map((comb) => {
        let fix = false;
        let index = 0;
        while (fix == false) {
          const combX = allComb[index];
          if (!checkIfCombinationExistis(combX?.pairOne!, combX?.pairTwo!, combinations)) {
            if (!checkIfCombinationExistisInOne(combX?.pairOne!, combX?.pairTwo!, combination.combinations)) {
              comb.pairOne = combX?.pairOne!;
              comb.pairTwo = combX?.pairTwo!;
              allComb.splice(0, 1);
              fix = true;
            }
          }
          index += 1;
        }
      })
    })

    setSprints(combinations);
  }

  function checkIfCombinationExistis(pairOne: string, pairTwo: string, combinations: ISprint[]) {
    let b = false;
    combinations.map((combination) => {
      combination.combinations.map((comb) => {
        if ((comb.pairOne == pairOne || comb.pairOne == pairTwo) && (comb.pairTwo == pairOne || comb.pairTwo == pairTwo)) {
          b= true;
        }
      });
    });
    return b;
  }

  function checkIfCombinationExistisInOne(pairOne: string, pairTwo: string, combinations: ICombination[]) { 
    let b = false;
    combinations.map((comb) => {
      if (comb.pairOne == pairOne || comb.pairOne == pairTwo || comb.pairTwo == pairOne || comb.pairTwo == pairTwo) {
        b = true;
      }
    });
    return b;

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