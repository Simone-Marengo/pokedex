import { Effect } from './Effect';
import { NamedAPIResource } from './NamedAPIResource';

export class AbilityEffectChange {
    effect_entries: Effect[];
    version_group: NamedAPIResource;
}