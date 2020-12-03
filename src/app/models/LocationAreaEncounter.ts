import { NamedAPIResource } from './NamedAPIResource';
import { VersionEncounterDetail } from './VersionEncounterDetail';

export class LocationAreaEncounter {
    location_area: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}