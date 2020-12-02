import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class EncounterCondition {
    id: number;
    name: string;
    names: Name[];
    values: NamedAPIResource[];
}