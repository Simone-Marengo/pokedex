import { NamedAPIResource } from './NamedAPIResource';
import { VersionEncounterDetail } from './VersionEncounterDetail';

export class PokemonEncounter {
    pokemon: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}