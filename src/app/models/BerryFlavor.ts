import { FlavorBerryMap } from './FlavorBerryMap';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class BerryFlavor {
    id: number;
    name: string;
    berries: FlavorBerryMap[];
    contest_type: NamedAPIResource;
    names: Name[];
}