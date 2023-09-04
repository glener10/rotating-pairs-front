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

  return (
    <div style={{ zIndex: 1 }}>
      <InputAndButton setInputNamesInArray={setInputNamesInArray} />
      {inputNamesInArray && inputNamesInArray.length > 0 && <EnteredNames setInputNamesInArray={setInputNamesInArray} valuesArray={inputNamesInArray} />}

      <button onClick={() => {
        const names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
        setInputNamesInArray(names);
      }}>SetEnteredNames</button>
      
      <div>
        <ButtonCombinations title={'Generate Combinations'} inputNamesInArray={inputNamesInArray} setSprints={setSprints} />
        {sprints && sprints.length > 0 && <ResultOfCombinations sprints={sprints} />}
      </div>
    </div>
  );
};

export default Drawer;