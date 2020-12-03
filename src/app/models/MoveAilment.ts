import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class MoveAilment {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    names: Name[];
}