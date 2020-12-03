import { AwesomeName } from './AwesomeName';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class PokemonShape {
    id: number;
    name: string;
    awesome_names: AwesomeName[];
    names: Name[];
    pokemon_species: NamedAPIResource[];
}