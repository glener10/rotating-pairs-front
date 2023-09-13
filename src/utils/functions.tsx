export const checkIfArrayIsOdd = (inputNamesInArray: string[]): boolean => {
  return inputNamesInArray.length % 2 == 0 ? false : true;
};

export const returnNumberOfSprints = (
  numberOfNamesIsOdd: boolean,
  inputNamesInArray: string[]
): number => {
  let numberOfSprints = inputNamesInArray.length - 1;

  if (numberOfNamesIsOdd) {
    numberOfSprints += 1;
  }

  return numberOfSprints;
};

export const returnNumberOfCombinationPerSprintRoundeddown = (
  numberOfNamesIsOdd: boolean,
  inputNamesInArray: string[]
): number => {
  let numberOfCombinationPerSprint = inputNamesInArray.length / 2;

  if (numberOfNamesIsOdd) {
    numberOfCombinationPerSprint += 1;
  }

  return Math.floor(numberOfCombinationPerSprint);
};
