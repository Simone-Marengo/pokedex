import { Encounter } from './Encounter';
import { NamedAPIResource } from './NamedAPIResource';

export class VersionEncounterDetail {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[]:
}