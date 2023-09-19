import { ButtonsCombinations } from '@/components/molecules/ButtonsCombinations';
import { InputAndButton } from '@/components/molecules/InputAndButton';
import { TitleAndLogCombinations } from '@/components/molecules/TitleAndLogCombinations';
import { ListCombinations } from '@/components/organisms/ListCombinations';
import { ListEnteredNames } from '@/components/organisms/ListEnteredNames';
import useResponsive from '@/hooks/useResponsive';
import { ISprint } from '@/interfaces/ISprint';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import { Box } from '@radix-ui/themes';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const mappingPaddingMainBox = (breakpoint: TBreakpoint): number => {
  const mapping = {
    desktop: 40,
    tablet: 30,
    mobile: 15,
  };

  return mapping[breakpoint] || 30;
};

export default function Home(): JSX.Element {
  const [inputNamesInArray, setInputNamesInArray] = useState<string[]>([]);
  const [sprints, setSprints] = useState<ISprint[]>([]);

  const [numberOfSprints, setNumberOfSprints] = useState<number>();
  const [numberOfCombinationPerSprint, setNumberOfCombinationPerSprint] = useState<number>();

  const breakpoint = useResponsive();

  const paddingMainBox = mappingPaddingMainBox(breakpoint);

  useEffect(() => {
    if (sprints && sprints.length > 0) {
      const numberOfSprints = sprints.length;
      const numberOfCombinationPerSprint = sprints[0].combinations.length;

      setNumberOfCombinationPerSprint(numberOfCombinationPerSprint);
      setNumberOfSprints(numberOfSprints);
    }
  }, [sprints]);

  return (
    <>
      <Head>
        <title>Rotating Pairs</title>
        <meta name="description" content="Pair combination generator for pair programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: paddingMainBox,
          }}
        >
          <InputAndButton setInputNamesInArray={setInputNamesInArray} />
          {inputNamesInArray && inputNamesInArray.length > 0 && (
            <ListEnteredNames
              setInputNamesInArray={setInputNamesInArray}
              valuesArray={inputNamesInArray}
            />
          )}

          <ButtonsCombinations inputNamesInArray={inputNamesInArray} setSprints={setSprints} />
          {sprints && sprints.length > 0 && (
            <>
              <TitleAndLogCombinations
                numberOfSprints={numberOfSprints ? numberOfSprints : 0}
                numberOfCombinationPerSprint={
                  numberOfCombinationPerSprint ? numberOfCombinationPerSprint : 0
                }
              />
              <ListCombinations sprints={sprints} />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
