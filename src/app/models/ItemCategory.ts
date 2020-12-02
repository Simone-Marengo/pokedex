import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class ItemCategory {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    pocket: NamedAPIResource;
}