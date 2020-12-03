import { Description } from './Description';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class MoveDamageClass {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedAPIResource[];
    names: Name[];
}