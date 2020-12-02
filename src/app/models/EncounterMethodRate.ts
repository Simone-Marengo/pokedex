import { EncounterVersionDetail } from './EncounterVersionDetail';
import { NamedAPIResource } from './NamedAPIResource';

export class EncounterMethodRate {
    encounter_method: NamedAPIResource;
    version_details: EncounterVersionDetail[];
}