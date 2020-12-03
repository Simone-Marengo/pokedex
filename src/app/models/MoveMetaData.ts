import { NamedAPIResource } from './NamedAPIResource';

export class MoveMetaData {
    aliment: NamedAPIResource;
    category: NamedAPIResource;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    aliment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}