"use client";
import ButtonCombinations from '@/components/atoms/ButtonCombinations';
import EnteredNames from '@/components/molecules/EnteredNames';
import { InputAndButton } from '@/components/molecules/InputAndButton';
import ResultOfCombinations from '@/components/molecules/ResultOfCombinations';
import { ISprint } from '@/interfaces/ISprint';
import React, { useState } from 'react';

export const Drawer = () => {
  const [inputNamesInArray, setInputNamesInArray] = useState<string[]>([]);

  const [sprints, setSprints] = useState<ISprint[]>([]);

  function generateSprints(names:string[]) {
    const sprints = [];
    const sprintCount = names.length - 1;
  
    for (let i = 0; i < sprintCount; i++) {
      const sprint = [];
  
      for (let j = 0; j < names.length / 2; j++) {
        const name1 = names[j];
        const name2 = names[names.length - 1 - j];
        sprint.push(`${name1} - ${name2}`);
      }
  
      sprints.push(`SPRINT (${i + 1}): ${sprint.join(', ')}`);
      // Rotacionar os nomes para a próxima sprint
      names.splice(1, 0, names.pop()!);
    }
  
    return sprints;
  }
  
  const teste = () => {
    const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
    const sprints = generateSprints(names);
  
    sprints.forEach((sprint) => console.log(sprint));
  };
  

  return (
    <div style={{ zIndex: 1 }}>
      <InputAndButton setInputNamesInArray={setInputNamesInArray} />
      {inputNamesInArray && inputNamesInArray.length > 0 && <EnteredNames setInputNamesInArray={setInputNamesInArray} valuesArray={inputNamesInArray} />}

      <button onClick={() => {
        const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
        setInputNamesInArray(names);
      }}>SetEnteredNames</button>

      <button onClick={teste}>TESTE</button>
      
      <div>
        <ButtonCombinations title={'Generate Combinations'} inputNamesInArray={inputNamesInArray} setSprints={setSprints} />
        {sprints && sprints.length > 0 && <ResultOfCombinations sprints={sprints} />}
      </div>
    </div>
  );
};

export default Drawer;