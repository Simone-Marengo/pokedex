import { FlavorText } from './FlavorText';
import { NamedAPIResource } from './NamedAPIResource';

export class SuperContestEffect {
    id: number;
    appeal: number;
    flavor_text_entries: FlavorText[];
    moves: NamedAPIResource[];
}