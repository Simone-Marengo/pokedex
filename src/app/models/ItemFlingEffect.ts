import { Effect } from './Effect';
import { NamedAPIResource } from './NamedAPIResource';

export class ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: Effect[];
    items: NamedAPIResource[];
}