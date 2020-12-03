import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class PokemonColor {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}