import { EncounterMethodRate } from './EncounterMethodRate';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { PokemonEncounter } from './PokemonEncounter';

export class LocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rated: EncounterMethodRate[];
    location: NamedAPIResource;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
}