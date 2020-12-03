import { Description } from './Description';
import { Name } from './Name';
import { NamedAPIResource } from './NamedAPIResource';

export class MoveLearnMethod {
    id: number;
    name: string;
    descriptions: Description[];
    names: Name[];
    version_groups: NamedAPIResource[];
}