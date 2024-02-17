/* eslint-disable @typescript-eslint/no-misused-promises */
import { BasicText } from '@/components/atoms/BasicText';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleToast } from '@/components/atoms/SimpleToast';
import { Title } from '@/components/atoms/Title';
import { ButtonsCombinations } from '@/components/molecules/ButtonsCombinations';
import { InputAndButton } from '@/components/molecules/InputAndButton';
import { TitleAndLogCombinations } from '@/components/molecules/TitleAndLogCombinations';
import { ListCombinations } from '@/components/organisms/ListCombinations';
import { ListEnteredNames } from '@/components/organisms/ListEnteredNames';
import useResponsive from '@/hooks/useResponsive';
import { ISprint } from '@/interfaces/ISprint';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import { Box } from '@radix-ui/themes';
import copy from 'clipboard-copy';
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

  const [openToast, setOpenToast] = useState(false);

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

  async function copyToClipboard(): Promise<void> {
    let output = '';
    for (
      let combinationIndex = 0;
      combinationIndex < sprints[0].combinations.length;
      combinationIndex++
    ) {
      for (let sprintIndex = 0; sprintIndex < sprints.length; sprintIndex++) {
        output = `${output}${sprints[sprintIndex].combinations[combinationIndex].pairOne} - ${sprints[sprintIndex].combinations[combinationIndex].pairTwo}`;
        if (sprintIndex != sprints.length - 1) {
          output = `${output}	`;
        }
      }
      output = `${output}\n`;
    }
    await copy(output);
    setOpenToast(true);
  }

  return (
    <>
      <Head>
        <title>Rotating Pairs</title>
        <meta name="description" content="Random Rotating Pair Generator for Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
        {openToast && (
          <SimpleToast
            setOpen={setOpenToast}
            open={openToast}
            title={'Well Done!!'}
            description={'Your combinations have been copied'}
          />
        )}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: paddingMainBox,
          }}
        >
          <Box>
            <Title>Rotating Pairs</Title>
            <BasicText>
              Tool to generate pair combinations without repetition for those who work with Pair
              Programming
            </BasicText>
            <br />
          </Box>
          <InputAndButton
            inputNamesInArray={inputNamesInArray}
            setInputNamesInArray={setInputNamesInArray}
          />
          {inputNamesInArray && inputNamesInArray.length > 0 && (
            <ListEnteredNames
              setInputNamesInArray={setInputNamesInArray}
              valuesArray={inputNamesInArray}
            />
          )}

          <ButtonsCombinations
            inputNamesInArray={inputNamesInArray}
            sprints={sprints}
            setSprints={setSprints}
          />
          {sprints && sprints.length > 0 && (
            <>
              <TitleAndLogCombinations
                numberOfSprints={numberOfSprints ? numberOfSprints : 0}
                numberOfCombinationPerSprint={
                  numberOfCombinationPerSprint ? numberOfCombinationPerSprint : 0
                }
              />
              <SimpleButton onClick={copyToClipboard}>
                Copy results to Clipboard in Sheet format
              </SimpleButton>
              <ListCombinations sprints={sprints} />
            </>
          )}
        </Box>
        <div style={{ marginBottom: '20px' }}></div>
      </main>
    </>
  );
}
