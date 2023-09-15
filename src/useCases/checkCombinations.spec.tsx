import jsonCombinations from '@/data/combinations.json';
import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import {
  checkIfAllCombinationsHaveAValidNumberOfSprint,
  checkIfAllIndexesAreValid,
  checkIfAllSprintsHaveAValidNumberOfCombinations,
  checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint,
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

  describe('checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint', () => {
    it.each(readJsonCombinations)(
      'Must check if there is a repeated combination in the JSON for the mapping of $numberOfInputs entries',
      (combination) => {
        const { sprints } = combination;

        expect(
          checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint(sprints)
        ).toBeTruthy();
      }
    );
  });

  describe('checkIfAllSprintsHaveAValidNumberOfCombinations', () => {
    it.each(readJsonCombinations)(
      'Must check if there is a valid number of combinations ($numberOfCombinationsPerSprint) per sprint in the JSON for the mapping of $numberOfInputs entries',
      (combination) => {
        const { sprints, numberOfCombinationsPerSprint } = combination;

        expect(
          checkIfAllSprintsHaveAValidNumberOfCombinations(sprints, numberOfCombinationsPerSprint)
        ).toBeTruthy();
      }
    );
  });

  describe('checkIfAllCombinationsHaveAValidNumberOfSprint', () => {
    it.each(readJsonCombinations)(
      'Must check if there is a valid number of sprints ($numberOfSprintst) in the JSON for the mapping of $numberOfInputs entries',
      (combination) => {
        const { sprints, numberOfSprints } = combination;

        expect(
          checkIfAllCombinationsHaveAValidNumberOfSprint(sprints, numberOfSprints)
        ).toBeTruthy();
      }
    );
  });
});
