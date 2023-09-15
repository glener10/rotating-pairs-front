import jsonCombinations from '@/data/combinations.json';
import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import {
  checkIfAllCombinationsHaveAValidNumberOfSprint,
  checkIfAllIndexesAreValid,
  checkIfAllSprintsHaveAValidNumberOfCombinations,
  checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint,
  checkIfThereIsARepeatedCombination,
} from '@/useCases/checkCombinations';
import {
  checkIfArrayIsOdd,
  generateIndexArrayWithSizeOfNewEntry,
  returnNumberOfCombinationPerSprintRoundeddown,
  returnNumberOfSprints,
} from '@/utils/functions';

describe('[unit] checkCombinations.tsx - useCase', () => {
  const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;

  const returnArrayAndBolleanEvenOrOdd = (
    numberOfInputs: number
  ): { indexArrayWithNumberInputs: string[]; numberOfInputsIsOdd: boolean } => {
    const indexArrayWithNumberInputs = generateIndexArrayWithSizeOfNewEntry(numberOfInputs);
    const numberOfInputsIsOdd = checkIfArrayIsOdd(indexArrayWithNumberInputs);
    return { indexArrayWithNumberInputs, numberOfInputsIsOdd };
  };

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
        const { sprints, numberOfCombinationsPerSprint, numberOfInputs } = combination;

        const { indexArrayWithNumberInputs, numberOfInputsIsOdd } =
          returnArrayAndBolleanEvenOrOdd(numberOfInputs);

        const generateNumberOfCombinationsPerSprint = returnNumberOfCombinationPerSprintRoundeddown(
          numberOfInputsIsOdd,
          indexArrayWithNumberInputs
        );

        expect(numberOfCombinationsPerSprint).toEqual(generateNumberOfCombinationsPerSprint);

        expect(
          checkIfAllSprintsHaveAValidNumberOfCombinations(sprints, numberOfCombinationsPerSprint)
        ).toBeTruthy();
      }
    );
  });

  describe('checkIfAllCombinationsHaveAValidNumberOfSprint', () => {
    it.each(readJsonCombinations)(
      'Must check if there is a valid number of sprints $numberOfSprints in the JSON for the mapping of $numberOfInputs entries',
      (combination) => {
        const { sprints, numberOfSprints, numberOfInputs } = combination;

        const { indexArrayWithNumberInputs, numberOfInputsIsOdd } =
          returnArrayAndBolleanEvenOrOdd(numberOfInputs);

        const generateNumberOfSprints = returnNumberOfSprints(
          numberOfInputsIsOdd,
          indexArrayWithNumberInputs
        );

        expect(generateNumberOfSprints).toEqual(numberOfSprints);

        expect(
          checkIfAllCombinationsHaveAValidNumberOfSprint(sprints, numberOfSprints)
        ).toBeTruthy();
      }
    );
  });
});
