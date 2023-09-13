import { ButtonCombinations } from '@/components/atoms/ButtonCombinations';
import { InputAndButton } from '@/components/molecules/InputAndButton';
import { ResultOfCombinations } from '@/components/molecules/ResultOfCombinations';
import { ListEnteredNames } from '@/components/organisms/ListEnteredNames';
import { ISprint } from '@/interfaces/ISprint';
import { Box } from '@radix-ui/themes';
import Head from 'next/head';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [inputNamesInArray, setInputNamesInArray] = useState<string[]>([]);

  const [sprints, setSprints] = useState<ISprint[]>([]);
  return (
    <>
      <Head>
        <title>Drawer of Pair Programming</title>
        <meta name="description" content="Drawer of Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
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
            <ListEnteredNames
              setInputNamesInArray={setInputNamesInArray}
              valuesArray={inputNamesInArray}
            />
          )}

          <ButtonCombinations
            title={'Generate Combinations'}
            inputNamesInArray={inputNamesInArray}
            setSprints={setSprints}
          />
          {sprints && sprints.length > 0 && <ResultOfCombinations sprints={sprints} />}
        </Box>
      </main>
    </>
  );
}
