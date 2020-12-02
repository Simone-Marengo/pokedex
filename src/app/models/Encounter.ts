import { NamedAPIResource } from './NamedAPIResource';

export class Encounter {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource[];
    chance: number;
    method: NamedAPIResource;
}