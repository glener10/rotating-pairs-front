'use client';
import { ButtonCombinations } from '@/components/atoms/ButtonCombinations';
import { InputAndButton } from '@/components/molecules/InputAndButton';
import { ResultOfCombinations } from '@/components/molecules/ResultOfCombinations';
import { EnteredNames } from '@/components/organisms/EnteredNames';
import { ISprint } from '@/interfaces/ISprint';
import { Box } from '@radix-ui/themes';
import { useState } from 'react';

export const Drawer = (): JSX.Element => {
  const [inputNamesInArray, setInputNamesInArray] = useState<string[]>([]);

  const [sprints, setSprints] = useState<ISprint[]>([]);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
      }}
    >
      <InputAndButton setInputNamesInArray={setInputNamesInArray} />
      {inputNamesInArray && inputNamesInArray.length > 0 && (
        <EnteredNames setInputNamesInArray={setInputNamesInArray} valuesArray={inputNamesInArray} />
      )}

      <ButtonCombinations
        title={'Generate Combinations'}
        inputNamesInArray={inputNamesInArray}
        setSprints={setSprints}
      />
      {sprints && sprints.length > 0 && <ResultOfCombinations sprints={sprints} />}
    </Box>
  );
};

export default Drawer;
