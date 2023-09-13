import { ISprint } from '@/interfaces/ISprint';

export interface ICombinationsJson {
  numberOfInputs: string;
  numberOfSprints: string;
  numberOfCombinationsPerSprint: string;
  sprints: ISprint[];
}
