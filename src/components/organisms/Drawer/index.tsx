"use client";
import EnteredNames from '@/components/molecules/EnteredNames';
import Input, { InputAndButton } from '@/components/molecules/InputAndButton';
import ResultOfCombinations from '@/components/molecules/ResultOfCombinations';
import React, { useEffect, useState } from 'react';

export interface ISprint{
  combinations: ICombination[];
}

export interface ICombination{
  pairOne: string;
  pairTwo: string;
}

export const Drawer = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [valuesArray, setValuesArray] = useState([]);


  const [sprints, setSprints] = useState<ISprint[]>([]);
  const [numberOfSprints, setNumberOfSprints] = useState<Number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<Number>();
  const [allCombinationsPossible, setAllCombinationsPossible] = useState<ICombination[]>([]);

  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleAddValues = () => {
    const newValues = inputValue.split('\n').map((value) => value.trim());
    const nonEmptyValues = newValues.filter((value) => value !== '');

    if (nonEmptyValues.length > 0) {
      //@ts-ignore
      setValuesArray((prevArray) => [...prevArray, ...nonEmptyValues]);
      setInputValue(''); // Limpa o input após adicionar os valores ao array
    }
  };

  const generateAllCombinationsPossible = (numberOfNamesIsOdd: boolean) => {
    setAllCombinationsPossible([]);
    const allCombinationsPossible: ICombination[] = [];
    valuesArray.map((A) => {
      valuesArray.map((B) => {
        if (A != B) {
          allCombinationsPossible.push({pairOne: A, pairTwo:B})
        }
      })
    })
    if (numberOfNamesIsOdd) {
      valuesArray.map((A) => {
          allCombinationsPossible.push({pairOne: A, pairTwo:"EMPTY"})
      })
    }
    setAllCombinationsPossible(() => allCombinationsPossible);
    return allCombinationsPossible;
  }

  const generateCombinations = (numberOfSprint:number, numberOfCombinationPerSprin:number,allCombinations: ICombination[]) => {
    const combinations: ISprint[] = [];
    for (let a = 0; a < Number(numberOfSprint); a++){
      const comb: ICombination[] = [];
      for (let b = 0; b < Number(numberOfCombinationPerSprin); b++) { 
        comb.push({ pairOne: "", pairTwo: "" });
      }
      combinations.push({ combinations:comb });
    }

    const allComb = allCombinations;

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

  const gerarCombinacoes = () => {
    const numberOfNamesIsOdd = valuesArray.length % 2 == 0 ? false : true;
    let numeroDeSprints = valuesArray.length - 1;
    
    
    let numberOfCombinationPerSprint = valuesArray.length / 2;

    if (numberOfNamesIsOdd) {
      numeroDeSprints += 1;
      numberOfCombinationPerSprint += 1;
    }

    const allComb = generateAllCombinationsPossible(numberOfNamesIsOdd);

    setNumberOfCombinationPerSprint(Math.floor(numberOfCombinationPerSprint));
    setNumberOfSprints(numeroDeSprints);

    generateCombinations(numeroDeSprints,Math.floor(numberOfCombinationPerSprint),allComb);
  };

  useEffect(() => {
    console.log(numberOfSprints);
  }, [numberOfSprints, allCombinationsPossible])
  
  useEffect(() => {
    console.log(sprints);
  },[sprints])

  return (
    <div style={{ zIndex: 1 }}>
      <InputAndButton inputValue={inputValue} handleInputChange={handleInputChange} handleAddValues={handleAddValues} />
      <EnteredNames valuesArray={valuesArray} />
      
      <div>
        <button onClick={()=>gerarCombinacoes()}>Generate Combinations</button>
        <ResultOfCombinations sprints={sprints} numberOfSprints={numberOfSprints} numberOfCombinationPerSprint={numberOfCombinationPerSprint} />
      </div>

      {sprints && sprints.length > 0 &&
        sprints.map((sprint, index) => {
          return sprint.combinations.map((comb) => {
            return (<p key={index}>{`\nSPRINT (${index+1}): ${comb.pairOne} - ${comb.pairTwo}`}</p>)
          })
        })
      }
      
    </div>

    
  );
};

export default Drawer;