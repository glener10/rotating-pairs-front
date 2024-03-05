import { ISprint } from '@/interfaces/ISprint';

export interface ICombinationsJson {
  NumberOfInputs: number;
  NumberOfSprints: number;
  NumberOfCombinationsPerSprint: number;
  Sprints: ISprint[];
}
