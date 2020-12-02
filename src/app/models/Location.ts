import { GenerationGameIndex } from './GenerationGameIndex';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class Location {
    id: number;
    name: string;
    region: NamedAPIResource;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: NamedAPIResource[];
}