import { Description } from './Description';
import { NamedAPIResource } from './NamedAPIResource';

export class MoveCategory {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    descriptions: Description[];
}