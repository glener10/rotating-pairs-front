import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';

export const doAllChecksInSprint = (sprints: ISprint[], numberOfInputs: number): boolean => {
  if (!checkIfAllIndexesAreValid(sprints, numberOfInputs)) {
    return false;
  }

  if (!checkIfThereIsARepeatedCombination(sprints)) {
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
            return false;
          }
        } else {
          if (
            (combination.pairOne === combinationForTesting.pairOne ||
              combination.pairOne === combinationForTesting.pairTwo) &&
            (combination.pairTwo === combinationForTesting.pairOne ||
              combination.pairTwo === combinationForTesting.pairTwo)
          ) {
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
