import { FlavorBerryMap } from './FlavorBerryMap';
import { NamedAPIResource } from './NamedAPIResource';

export class Berry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedAPIResource;
    flavors: FlavorBerryMap[];
    item: NamedAPIResource;
    natural_gift_type: NamedAPIResource;
}