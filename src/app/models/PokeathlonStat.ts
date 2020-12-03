import { Name } from './Name';
import { NaturePokeathlonStatAffectSets } from './NaturePokeathlonStatAffectSets';

export class PokeathlonStat {
    id: number;
    name: string;
    names: Name[];
    affecting_natures: NaturePokeathlonStatAffectSets;
}