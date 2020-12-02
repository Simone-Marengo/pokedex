import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class EncounterConditionValue {
    id: number;
    name: string;
    condition: NamedAPIResource;
    names: Name[];
}