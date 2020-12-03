import { AbilityEffectChange } from './AbilityEffectChange';
import { APIResource } from './APIResource';
import { ContestComboSet } from './ContestComboSet';
import { MachineVersionDetail } from './MachineVersionDetail';
import { MoveFlavorText } from './MoveFlavorText';
import { MoveMetaData } from './MoveMetaData';
import { MoveStatChange } from './MoveStatChange';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { PastMoveStatValues } from './PastMoveStatValues';
import { VerboseEffect } from './VerboseEffect';

export class Move {
    id: number;
    name: string;
    accuracy: number;
    effect_change: number;
    pp: number;
    priority: number;
    power: number;
    contest_combos: ContestComboSet;
    contest_type: NamedAPIResource;
    contest_effect: APIResource;
    damage_class: NamedAPIResource;
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedAPIResource;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource;
    target: NamedAPIResource;
    type: NamedAPIResource;
}