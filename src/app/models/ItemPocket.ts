import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class ItemPocket {
    id: number;
    name: string;
    categories: NamedAPIResource[];
    names: Name[];
}