import { APIResource } from './APIResource';
import { Description } from './Description';
import { FlavorText } from './FlavorText';
import { Genus } from './Genus';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { PalParkEncounterArea } from './PalParkEncounterArea';
import { PokemonSpeciesDexEntry } from './PokemonSpeciesDexEntry';
import { PokemonSpeciesVariety } from './PokemonSpeciesVariety';

export class PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mithical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource;
    pokedex_numbers: PokemonSpeciesDexEntry[];
    egg_groups: NamedAPIResource[];
    color: NamedAPIResource[];
    shape:NamedAPIResource;
    evolves_from_species: NamedAPIResource;
    evolution_chain: APIResource;
    habitat: NamedAPIResource;
    generation: NamedAPIResource;
    names: Name[];
    pal_park_encounters: PalParkEncounterArea[];
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[];
}