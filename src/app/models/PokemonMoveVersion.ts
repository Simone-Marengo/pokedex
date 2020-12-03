import { NamedAPIResource } from './NamedAPIResource';

export class PokemonMoveVersion {
    move_learn_method: NamedAPIResource[];
    version_group: NamedAPIResource;
    level_learned_at: number;
}