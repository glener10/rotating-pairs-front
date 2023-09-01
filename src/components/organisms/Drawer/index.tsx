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


  const [sprints, setSprints] = useState([]);
  const [numberOfSprints, setNumberOfSprints] = useState<Number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<Number>();

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

  const gerarCombinacoes = () => {
    const numeroDeNomesEhImpar = valuesArray.length % 2 == 0 ? false : true;
    let numeroDeSprints = valuesArray.length - 1;
    
    let numberOfCombinationPerSprint = valuesArray.length / 2;

    if (numeroDeNomesEhImpar) {
      numeroDeSprints += 1;
      numberOfCombinationPerSprint += 1;
    }
    setNumberOfCombinationPerSprint(Math.floor(numberOfCombinationPerSprint));
    setNumberOfSprints(numeroDeSprints);
  };

  useEffect(() => {
    console.log(numberOfSprints);
  },[numberOfSprints])

  return (
    <div style={{ zIndex: 1 }}>
      <InputAndButton inputValue={inputValue} handleInputChange={handleInputChange} handleAddValues={handleAddValues} />
      <EnteredNames valuesArray={valuesArray} />
      
      <div>
        <button onClick={()=>gerarCombinacoes()}>Gerar combinações</button>
        <ResultOfCombinations sprints={sprints} numberOfSprints={numberOfSprints} numberOfCombinationPerSprint={numberOfCombinationPerSprint} />
      </div>
    </div>
  );
};

export default Drawer;