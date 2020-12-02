import { Description } from './Description';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { PokemonEntry } from './PokemonEntry';

export class Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: NamedAPIResource;
    version_groups: NamedAPIResource[];
}