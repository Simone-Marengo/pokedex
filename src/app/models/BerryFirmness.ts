import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class BerryFirmness {
    id: number;
    name: string;
    berries: NamedAPIResource[];
    names: Name[];
}