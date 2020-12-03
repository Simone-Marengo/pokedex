import { NamedAPIResource } from './NamedAPIResource';
import { PokemonHeldItemVersion } from './PokemonHeldItemVersion';

export class PokemonHeldItem {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
}