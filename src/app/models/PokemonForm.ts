import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { PokemonFormSprites } from './PokemonFormSprites';

export class PokemonForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: NamedAPIResource;
    sprites: PokemonFormSprites;
    version_group: NamedAPIResource;
    names: Name[];
    form_names: Name[];
}