import { NamedAPIResource } from './NamedAPIResource';
import { PokemonMoveVersion } from './PokemonMoveVersion';

export class PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
}