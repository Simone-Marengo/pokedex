import { APIResource } from './APIResource';
import { GenerationGameIndex } from './GenerationGameIndex';
import { ItemHolderPokemon } from './ItemHolderPokemon';
import { ItemSprites } from './ItemSprites';
import { MachineVersionDetail } from './MachineVersionDetail';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { VerboseEffect } from './VerboseEffect';
import { VersionGroupFlavorText } from './VersionGroupFlavorText';

export class Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: NamedAPIResource;
    attributes: NamedAPIResource[];
    category: NamedAPIResource;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: APIResource;
    machines: MachineVersionDetail[];
}