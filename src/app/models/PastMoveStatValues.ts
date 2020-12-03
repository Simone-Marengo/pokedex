import { NamedAPIResource } from './NamedAPIResource';
import { VerboseEffect } from './VerboseEffect';

export class PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource;
    version_group: NamedAPIResource;
}