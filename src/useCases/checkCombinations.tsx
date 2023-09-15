import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';
import {
  checkIfArrayIsOdd,
  generateIndexArrayWithSizeOfNewEntry,
  returnNumberOfCombinationPerSprintRoundeddown,
  returnNumberOfSprints,
} from '@/utils/functions';

export const doAllChecksInSprint = (sprints: ISprint[], numberOfInputs: number): boolean => {
  if (!checkIfAllIndexesAreValid(sprints, numberOfInputs)) {
    return false;
  }

  if (!checkIfThereIsARepeatedCombination(sprints)) {
    return false;
  }

  if (!checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint(sprints)) {
    return false;
  }

  const indexArrayWithNumberInputs = generateIndexArrayWithSizeOfNewEntry(numberOfInputs);
  const numberOfInputsIsOdd = checkIfArrayIsOdd(indexArrayWithNumberInputs);
  if (
    !checkIfAllSprintsHaveAValidNumberOfCombinations(
      sprints,
      returnNumberOfCombinationPerSprintRoundeddown(numberOfInputsIsOdd, indexArrayWithNumberInputs)
    )
  ) {
    return false;
  }

  const numberOfSprints = returnNumberOfSprints(numberOfInputsIsOdd, indexArrayWithNumberInputs);

  if (!checkIfAllCombinationsHaveAValidNumberOfSprint(sprints, numberOfSprints)) {
    return false;
  }

  return true;
};

export const checkIfThereIsARepeatedCombination = (sprints: ISprint[]): boolean => {
  for (let indexSprint = 0; indexSprint < sprints.length; indexSprint++) {
    const sprint = sprints[indexSprint];

    for (
      let indexCombinations = 0;
      indexCombinations < sprint.combinations.length;
      indexCombinations++
    ) {
      const combination = sprint.combinations[indexCombinations];

      if (!checkOneCombination(combination, indexSprint, indexCombinations, sprints)) {
        return false;
      }
    }
  }
  return true;
};

const checkOneCombination = (
  combination: ICombination,
  indexSprintYourself: number,
  indexCombinationsYourself: number,
  sprints: ISprint[]
): boolean => {
  for (let indexSprint = 0; indexSprint < sprints.length; indexSprint++) {
    const sprint = sprints[indexSprint];

    for (
      let indexCombinations = 0;
      indexCombinations < sprint.combinations.length;
      indexCombinations++
    ) {
      const combinationForTesting = sprint.combinations[indexCombinations];

      if (indexSprint !== indexSprintYourself || indexCombinations !== indexCombinationsYourself) {
        if (
          combination.pairOne == combination.pairTwo ||
          combinationForTesting.pairOne == combinationForTesting.pairTwo
        ) {
          if (
            combination.pairOne === combinationForTesting.pairOne &&
            combination.pairOne === combinationForTesting.pairTwo &&
            combination.pairTwo === combinationForTesting.pairOne &&
            combination.pairTwo === combinationForTesting.pairTwo
          ) {
            console.log(
              `Sprint[${indexSprintYourself}]: ${combination.pairOne} - ${combination.pairTwo}   With  Sprint[${indexSprint}]: ${combinationForTesting.pairOne} - ${combinationForTesting.pairTwo}`
            );
            return false;
          }
        } else {
          if (
            (combination.pairOne === combinationForTesting.pairOne ||
              combination.pairOne === combinationForTesting.pairTwo) &&
            (combination.pairTwo === combinationForTesting.pairOne ||
              combination.pairTwo === combinationForTesting.pairTwo)
          ) {
            console.log(
              `Sprint[${indexSprintYourself}]: ${combination.pairOne} - ${combination.pairTwo}   With  Sprint[${indexSprint}]: ${combinationForTesting.pairOne} - ${combinationForTesting.pairTwo}`
            );
            return false;
          }
        }
      }
    }
  }

  return true;
};

export const checkIfAllIndexesAreValid = (sprints: ISprint[], numberOfInputs: number): boolean => {
  for (let indexSprint = 0; indexSprint < sprints.length; indexSprint++) {
    const sprint = sprints[indexSprint];

    for (
      let indexCombinations = 0;
      indexCombinations < sprint.combinations.length;
      indexCombinations++
    ) {
      const combination = sprint.combinations[indexCombinations];

      if (
        Number(combination.pairOne) >= numberOfInputs ||
        Number(combination.pairTwo) >= numberOfInputs
      ) {
        return false;
      }
    }
  }
  return true;
};

export const checkIfAnyInputFromThePairIsRepeatedInTheCombinationsOfASprint = (
  sprints: ISprint[]
): boolean => {
  for (let indexSprint = 0; indexSprint < sprints.length; indexSprint++) {
    const sprint = sprints[indexSprint];
    for (
      let indexCombinations = 0;
      indexCombinations < sprint.combinations.length;
      indexCombinations++
    ) {
      const combination = sprint.combinations[indexCombinations];
      if (
        !checkAnyPairDontRepeatInTheCombinations(
          combination,
          indexCombinations,
          sprint.combinations
        )
      ) {
        return false;
      }
    }
  }
  return true;
};

const checkAnyPairDontRepeatInTheCombinations = (
  combination: ICombination,
  indexCombinationsYourself: number,
  combinations: ICombination[]
): boolean => {
  for (let indexCombinations = 0; indexCombinations < combinations.length; indexCombinations++) {
    const combinationForTesting = combinations[indexCombinations];

    if (indexCombinations != indexCombinationsYourself) {
      if (
        combination.pairOne == combinationForTesting.pairOne ||
        combination.pairOne == combinationForTesting.pairTwo ||
        combination.pairTwo == combinationForTesting.pairOne ||
        combination.pairTwo == combinationForTesting.pairTwo
      ) {
        return false;
      }
    }
  }

  return true;
};

export const checkIfAllSprintsHaveAValidNumberOfCombinations = (
  sprints: ISprint[],
  numberOfCombinationPerSprint: number
): boolean => {
  for (let indexSprint = 0; indexSprint < sprints.length; indexSprint++) {
    if (sprints[indexSprint].combinations.length != numberOfCombinationPerSprint) {
      return false;
    }
  }
  return true;
};

export const checkIfAllCombinationsHaveAValidNumberOfSprint = (
  sprints: ISprint[],
  numberOfSprints: number
): boolean => {
  if (sprints.length != numberOfSprints) {
    return false;
  }

  return true;
};
