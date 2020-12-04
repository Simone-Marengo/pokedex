import { NamedAPIResource } from './NamedAPIResource';

export class NamesAPIResourseList {
    count: number;
    next: string;
    previous: string;
    results: NamedAPIResource[];
}