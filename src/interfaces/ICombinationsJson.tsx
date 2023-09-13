import { ISprint } from '@/interfaces/ISprint';

export interface ICombinationsJson {
  numberOfInputs: number;
  numberOfSprints: number;
  numberOfCombinationsPerSprint: number;
  sprints: ISprint[];
}
