import { EvolutionDetail } from './EvolutionDetail';
import { NamedAPIResource } from './NamedAPIResource';

export class ChainLink {
    is_baby: boolean;
    species: NamedAPIResource;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink;
}