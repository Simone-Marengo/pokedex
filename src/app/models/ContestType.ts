import { ContestName } from './ContestName';
import { NamedAPIResource } from './NamedAPIResource';

export class ContestType {
    id: number;
    name: string;
    berry_flavor: NamedAPIResource;
    names: ContestName[];
}