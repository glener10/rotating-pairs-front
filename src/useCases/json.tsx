import jsonCombinations from '@/data/combinations.json';
import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import { ISprint } from '@/interfaces/ISprint';
import {
  checkIfArrayIsOdd,
  returnNumberOfCombinationPerSprintRoundeddown,
  returnNumberOfSprints,
} from '@/utils/functions';

export class Json {
  static downloadUpdatedJson(
    inputNamesInArray: string[],
    triedGenerateCombinations: ISprint[],
    jsonValues: ICombinationsJson[]
  ): void {
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
    const newValuesJson = jsonValues;
    newValuesJson.push(newCombination);
    const newObjectJson = JSON.stringify({ jsonCombinations: newValuesJson }, null, 2);

    const blob = new Blob([newObjectJson], { type: 'application/json' });
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
  }

  static tryGenerateCombinationBasedInJson(numberOfInputs: number): boolean {
    const readJsonCombinations: ICombinationsJson[] = jsonCombinations.jsonCombinations;

    const findElementAfterInputNumber = readJsonCombinations.find(
      (combination) => combination.numberOfInputs == numberOfInputs + 1
    );
    if (findElementAfterInputNumber) {
      const newCombinations =
        generateCombinationForNewEntryEvenIfThereIsAValidSubsequentCombination(
          findElementAfterInputNumber
        );
      if (newCombinations) {
        Json.downloadUpdatedJson(
          generateIndexArrayWithSizeOfNewEntry(numberOfInputs),
          newCombinations,
          readJsonCombinations
        );
        return true;
      }
    }
    return false;
  }
}

function generateIndexArrayWithSizeOfNewEntry(numberOfInputs: number): string[] {
  const arraySizeOfInput: string[] = [];
  for (let index = 0; index < numberOfInputs; index++) {
    arraySizeOfInput.push(`${index}`);
  }
  return arraySizeOfInput;
}

//TODO: Check logic
function generateCombinationForNewEntryEvenIfThereIsAValidSubsequentCombination(
  findElementAfterInputNumber: ICombinationsJson
): ISprint[] {
  const newCombinationJson = { ...findElementAfterInputNumber };

  return newCombinationJson.sprints;
}
