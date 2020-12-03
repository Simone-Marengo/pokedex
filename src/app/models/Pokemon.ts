import { NamedAPIResource } from './NamedAPIResource';
import { PokemonAbility } from './PokemonAbility';
import { PokemonHeldItem } from './PokemonHeldItem';
import { PokemonMove } from './PokemonMove';
import { PokemonSprites } from './PokemonSprites';
import { PokemonStat } from './PokemonStat';
import { PokemonType } from './PokemonType';

export class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
}