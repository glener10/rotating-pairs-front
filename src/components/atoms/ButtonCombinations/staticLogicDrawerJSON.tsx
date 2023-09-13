import { generateCombinations } from '@/components/atoms/ButtonCombinations/logicalDrawer';
import { ISprint } from '@/interfaces/ISprint';
import * as combinations from './combinations.json';

export const staticLogicReadCombinations = (inputNamesInArray: string[]): ISprint[] => {
  const numberOfInputs = inputNamesInArray.length;

  const findElementWithEqualNumberOfInputs = combinations.generateCombinations.find(
    (combination) => combination.numberOfInputs == numberOfInputs
  );

  if (findElementWithEqualNumberOfInputs) {
    const sprintsOfElementWithEqualNumberOfInputs = findElementWithEqualNumberOfInputs.sprints;

    const shuffledInput = shuffleInput(inputNamesInArray);

    const combinationsConverted = convertCombinations(
      shuffledInput,
      sprintsOfElementWithEqualNumberOfInputs
    );

    return combinationsConverted;
  } else {
    const indexInputs = returnIndexOfInputs(inputNamesInArray);
    const triedGenerateCombinations = generateCombinations(indexInputs);

    const numberOfNamesIsOdd = checkIfArrayIsOdd(inputNamesInArray);
    const numberOfSprint = returnNumberOfSprints(numberOfNamesIsOdd, inputNamesInArray);
    const numberOfCombinationPerSprint = returnNumberOfCombinationPerSprintRoundeddown(
      numberOfNamesIsOdd,
      inputNamesInArray
    );

    const newCombination = {
      numberOfInputs: inputNamesInArray.length,
      numberOfSprints: numberOfSprint,
      numberOfCombinationsPerSprint: numberOfCombinationPerSprint,
      sprints: triedGenerateCombinations,
    };

    const newValuesJson = combinations.generateCombinations;
    newValuesJson.push(newCombination);
    const newObjectJson = JSON.stringify({ generateCombinations: newValuesJson }, null, 2);

    const blob = new Blob([newObjectJson], { type: 'application/json' });
    blob;
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'combinations.json';

    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    a.dispatchEvent(clickEvent);

    window.URL.revokeObjectURL(url);

    const shuffledInput = shuffleInput(inputNamesInArray);

    const combinationsConverted = convertCombinations(shuffledInput, triedGenerateCombinations);

    //TODO: método para montar quando conhece, por exemplo com 19 que tem o EMPTY é só adicionar o 20 no lugar do EMPTY
    return combinationsConverted;
  }
};

const convertCombinations = (
  inputNamesInArray: string[],
  combinationsSprints: ISprint[]
): ISprint[] => {
  const convertedInput: ISprint[] = combinationsSprints.map((combination) => {
    return {
      combinations: combination.combinations.map((comb) => {
        return {
          pairOne: inputNamesInArray[Number(comb.pairOne)],
          pairTwo: inputNamesInArray[Number(comb.pairTwo)],
        };
      }),
    };
  });

  return convertedInput;
};

const shuffleInput = (inputNamesInArray: string[]): string[] => {
  const allInputsValues = inputNamesInArray.map((input) => {
    return input;
  });
  return allInputsValues.sort(() => Math.random() - 0.5);
};

const returnIndexOfInputs = (inputNamesInArray: string[]): string[] => {
  const allInputsValues = inputNamesInArray.map((input, index) => {
    input;
    return `${index}`;
  });
  return allInputsValues;
};

const checkIfArrayIsOdd = (inputNamesInArray: string[]): boolean => {
  return inputNamesInArray.length % 2 == 0 ? false : true;
};

const returnNumberOfSprints = (
  numberOfNamesIsOdd: boolean,
  inputNamesInArray: string[]
): number => {
  let numberOfSprints = inputNamesInArray.length - 1;

  if (numberOfNamesIsOdd) {
    numberOfSprints += 1;
  }

  return numberOfSprints;
};

const returnNumberOfCombinationPerSprintRoundeddown = (
  numberOfNamesIsOdd: boolean,
  inputNamesInArray: string[]
): number => {
  let numberOfCombinationPerSprint = inputNamesInArray.length / 2;

  if (numberOfNamesIsOdd) {
    numberOfCombinationPerSprint += 1;
  }

  return Math.floor(numberOfCombinationPerSprint);
};
