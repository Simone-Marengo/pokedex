import { APIResource } from './APIResource';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { NatureStatAffectSets } from './NatureStatAffectSets';

export class Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: NatureStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: APIResource[];
    move_damage_class: NamedAPIResource;
    names: Name[];
}