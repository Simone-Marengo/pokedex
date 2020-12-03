import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class Version {
    id: number;
    name: string;
    names: Name[];
    version_group: NamedAPIResource;
}