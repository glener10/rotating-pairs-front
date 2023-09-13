import jsonCombinations from '@/data/combinations.json';
import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import { ISprint } from '@/interfaces/ISprint';
import { downloadUpdatedJson } from '@/useCases/jsonOperations';
import { generateCombinations } from '@/useCases/logicalDrawer';

export const staticLogicReadCombinations = (inputNamesInArray: string[]): ISprint[] => {
  const numberOfInputs = inputNamesInArray.length;

  //console.log('Reading combinations of Json...\n');
  const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;
  const findElementWithEqualNumberOfInputs = readJsonCombinations.find(
    (combination) => combination.numberOfInputs == numberOfInputs
  );

  if (findElementWithEqualNumberOfInputs) {
    //console.log('Element with the same number of inputs find.\n');
    const sprintsOfElementWithEqualNumberOfInputs = findElementWithEqualNumberOfInputs.sprints;

    //console.log('Shuffling input...\n');
    const shuffledInput = shuffleInput(inputNamesInArray);

    //console.log('Generate Combinations...\n');
    const combinationsConverted = convertCombinationsToInputNames(
      shuffledInput,
      sprintsOfElementWithEqualNumberOfInputs
    );

    return combinationsConverted;
  } else {
    //console.log('Element with the same number of inputs not find.\n');

    //console.log('Return array of indexs in the place of the input names...\n');
    const indexInputs = returnIndexOfInputs(inputNamesInArray); //For save in JSON a new mapping of combinations, we need the index and not the names

    //console.log('Trying to generate combinations...\n');
    const triedGenerateCombinations = generateCombinations(indexInputs, 50000, 10000);

    //console.log('Download new json with new combination mapping...\n');
    //TODO: This line is only to desenv, don't forget to comment there
    const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;
    downloadUpdatedJson(inputNamesInArray, triedGenerateCombinations, readJsonCombinations);

    //console.log('Shuffling input...\n');
    const shuffledInput = shuffleInput(inputNamesInArray);

    //console.log('Convert index combinations to input names...\n');
    const combinationsConverted = convertCombinationsToInputNames(
      shuffledInput,
      triedGenerateCombinations
    );

    return combinationsConverted;
  }
};

const convertCombinationsToInputNames = (
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
