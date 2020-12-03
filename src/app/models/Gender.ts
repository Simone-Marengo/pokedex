import { NamedAPIResource } from './NamedAPIResource';
import { PokemonSpeciesGender } from './PokemonSpeciesGender';

export class Gender {
    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesGender[];
    requires_for_evolution: NamedAPIResource[];
}