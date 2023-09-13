import jsonCombinations from '@/data/combinations.json';
import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import {
  checkIfAllIndexesAreValid,
  checkIfThereIsARepeatedCombination,
} from '@/useCases/checkCombinations';

describe('[unit] checkCombinations.tsx - useCase', () => {
  const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;

  describe('checkIfThereIsARepeatedCombination', () => {
    it.each(readJsonCombinations)(
      'Must check if there is a repeated combination in the JSON for the mapping of $numberOfInputs entries',
      (combination) => {
        const { sprints } = combination;

        expect(checkIfThereIsARepeatedCombination(sprints)).toBeTruthy();
      }
    );
  });

  describe('checkIfAllIndexesAreValid', () => {
    it.each(readJsonCombinations)(
      'Must Check If All Indexes Are Valid for the mapping for the $numberOfInputs entries',
      (combination) => {
        const { sprints, numberOfInputs } = combination;

        expect(checkIfAllIndexesAreValid(sprints, numberOfInputs)).toBeTruthy();
      }
    );
  });
});
