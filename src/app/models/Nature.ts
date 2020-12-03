import { MoveBattleStylePreference } from './MoveBattleStylePreference';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { NatureStatChange } from './NatureStatChange';

export class Nature {
    id: number;
    name: string;
    decreased_stat: NamedAPIResource;
    increased_stat: NamedAPIResource;
    hates_stat: NamedAPIResource;
    likes_flavor: NamedAPIResource;
    pokeathlon_stat_changes: NatureStatChange[];
    move_battle_style_preferences: MoveBattleStylePreference[];
    names: Name[];
}