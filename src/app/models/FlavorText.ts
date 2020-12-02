import { NamedAPIResource } from './NamedAPIResource';
import { NamesAPIResourseList } from './NamedAPIResourceList';

export class FlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamesAPIResourseList;
}