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

    const combinationsConverted = convertCombinationsJson(
      shuffledInput,
      sprintsOfElementWithEqualNumberOfInputs
    );

    return combinationsConverted;
  } else {
    //TODO: Tentar gerar combinações
    //TODO: Se não conseguir, gerar um alerta de erro de processamento
    //TODO: Se conseguir salvar no arquivo JSON
    //TODO: método para montar quando conhece, por exemplo com 19 que tem o EMPTY é só adicionar o 20 no lugar do EMPTY
    const sprints: ISprint[] = [];
    return sprints;
  }
};

const convertCombinationsJson = (
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
