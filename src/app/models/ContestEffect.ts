import { Effect } from './Effect';

export class ContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: Effect[];
}