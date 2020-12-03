import { Description } from './Description';
import { GrowthRateExperienceLevel } from './GrowthRateExperienceLevel';
import { NamedAPIResource } from './NamedAPIResource';

export class GrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: NamedAPIResource[];
}