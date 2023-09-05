import { ICombination } from '@/interfaces/ICombination';
import { ISprint } from '@/interfaces/ISprint';

interface ButtonCombinationsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  inputNamesInArray: string[];
  setSprints: React.Dispatch<React.SetStateAction<ISprint[]>>;
}

export const ButtonCombinations = (props: ButtonCombinationsProps): JSX.Element => {
  const generateCombinationsOfTheSprints = (): void => {
    const sprints = generateSprints();
    props.setSprints(sprints);
  };

  function generateSprints(): ISprint[] {
    const names = copyInputNamesInArray();

    const sprints: ISprint[] = [];
    const sprintCount = names.length - 1;

    for (let i = 0; i < sprintCount; i++) {
      const combinations: ICombination[] = [];

      for (let j = 0; j < names.length / 2; j++) {
        const name1 = names[j];
        const name2 = names[names.length - 1 - j];
        combinations.push({ pairOne: name1, pairTwo: name2 });
      }

      sprints.push({ combinations: combinations });
      const poppedValue = names.pop();
      if (poppedValue !== undefined) {
        names.splice(1, 0, poppedValue);
      }
    }

    return sprints;
  }

  const copyInputNamesInArray = (): string[] => {
    const allInputsValues = props.inputNamesInArray.map((input) => {
      return input;
    });
    return allInputsValues;
  };

  const clearAllCombinations = (): void => {
    props.setSprints([]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button
        onClick={(): void => generateCombinationsOfTheSprints()}
        {...props}
        disabled={props.inputNamesInArray.length > 1 ? false : true}
      >
        {props.title}
      </button>
      <button onClick={clearAllCombinations}>{'Clear All Combinations'}</button>
    </div>
  );
};

export default ButtonCombinations;
