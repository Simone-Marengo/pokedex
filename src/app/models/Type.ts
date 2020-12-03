import { GenerationGameIndex } from './GenerationGameIndex';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';
import { TypePokemon } from './TypePokemon';
import { TypeRelations } from './TypeRelations';

export class Type {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    game_indices: GenerationGameIndex[];
    generation: NamedAPIResource;
    move_damage_class: NamedAPIResource;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedAPIResource[];
}