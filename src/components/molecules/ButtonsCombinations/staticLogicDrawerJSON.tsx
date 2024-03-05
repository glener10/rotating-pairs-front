import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import { ISprint } from '@/interfaces/ISprint';
import jsonCombinations from './combinations.json';

export const staticLogicReadCombinations = (numberOfInputs: number): ISprint[] | null => {
  const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;
  const findElementWithEqualNumberOfInputs = readJsonCombinations.find(
    (combination) => combination.NumberOfInputs == numberOfInputs
  );

  if (findElementWithEqualNumberOfInputs) {
    const sprintsOfElementWithEqualNumberOfInputs = findElementWithEqualNumberOfInputs.Sprints;
    return sprintsOfElementWithEqualNumberOfInputs;
  }
  return null;
};
