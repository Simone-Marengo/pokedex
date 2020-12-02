import { Description } from './Description';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class ItemAttribute {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    descriptions: Description[];
}