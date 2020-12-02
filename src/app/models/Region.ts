import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class Region {
    id: number;
    name: string;
    locations: NamedAPIResource[];
    names: Name[];
    main_generation: NamedAPIResource;
    pokedexes: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}