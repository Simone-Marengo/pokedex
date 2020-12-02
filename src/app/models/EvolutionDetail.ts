import { NamedAPIResource } from './NamedAPIResource';

export class EvolutionDetail {
    item: NamedAPIResource;
    trigger: NamedAPIResource;
    gender: number;
    held_item: NamedAPIResource;
    know_move: NamedAPIResource;
    know_move_type: NamedAPIResource;
    location: NamedAPIResource;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overwolrd_rain: boolean;
    party_species: NamedAPIResource;
    party_type: NamedAPIResource;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: NamedAPIResource;
    turn_upside_down: boolean;
}