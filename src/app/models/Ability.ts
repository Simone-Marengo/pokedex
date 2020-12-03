import { AbilityEffectChange } from './AbilityEffectChange';
import { AbilityFlavorText } from './AbilityFlavorText';
import { AbilityPokemon } from './AbilityPokemon';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { VerboseEffect } from './VerboseEffect';

export class Ability {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedAPIResource;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
}