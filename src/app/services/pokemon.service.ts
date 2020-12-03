import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ability } from '../models/Ability';
import { Characteristic } from '../models/Characteristic';
import { EggGroup } from '../models/EggGroup';
import { Gender } from '../models/Gender';
import { GrowthRate } from '../models/GrowthRate';
import { LocationAreaEncounter } from '../models/LocationAreaEncounter';
import { Nature } from '../models/Nature';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { Pokemon } from '../models/Pokemon';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { Stat } from '../models/Stat';
import { Type } from '../models/Type';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(
        private _http: HttpClient
    ) { }

    public getAbility(idOrName: number | string): Observable<Ability> {
        return this._http.get<Ability>(`${environment.apiUrl}ability/${idOrName}`);
    }

    public getCharacteristic(id: number): Observable<Characteristic> {
        return this._http.get<Characteristic>(`${environment.apiUrl}characteristic/${id}`);
    }

    public getEggGroup(idOrName: number | string): Observable<EggGroup> {
        return this._http.get<EggGroup>(`${environment.apiUrl}egg-group/${idOrName}`);
    }

    public getGender(idOrName: number | string): Observable<Gender> {
        return this._http.get<Gender>(`${environment.apiUrl}gender/${idOrName}`);
    }

    public getGrowthRate(idOrName: number | string): Observable<GrowthRate> {
        return this._http.get<GrowthRate>(`${environment.apiUrl}growth-rate/${idOrName}`);
    }

    public getNature(idOrName: number | string): Observable<Nature> {
        return this._http.get<Nature>(`${environment.apiUrl}nature/${idOrName}`);
    }

    public getPokeathlonStat(idOrName: number | string): Observable<PokeathlonStat> {
        return this._http.get<PokeathlonStat>(`${environment.apiUrl}pokeathlon-stat/${idOrName}`);
    }

    public getPokemon(idOrName: number | string): Observable<Pokemon> {
        return this._http.get<Pokemon>(`${environment.apiUrl}pokemon/${idOrName}`);
    }

    public getPokemonListed(page: number): Observable<Pokemon[]> {
        return this._http.get<Pokemon[]>(`${environment.apiUrl}pokemon/?limit=${environment.listLimit}&offset=${page}`);
    }

    public getPokemonLocationArea(idOrName: number | string): Observable<LocationAreaEncounter> {
        return this._http.get<LocationAreaEncounter>(`${environment.apiUrl}pokemon/${idOrName}/encounters`);
    }

    public getPokemonColor(idOrName: number | string): Observable<PokemonColor> {
        return this._http.get<PokemonColor>(`${environment.apiUrl}pokemon-color/${idOrName}`);
    }

    public getPokemonForm(idOrName: number | string): Observable<PokemonForm> {
        return this._http.get<PokemonForm>(`${environment.apiUrl}pokemon-form/${idOrName}`);
    }

    public getPokemonHabitat(idOrName: number | string): Observable<PokemonHabitat> {
        return this._http.get<PokemonHabitat>(`${environment.apiUrl}pokemon-habitat/${idOrName}`);
    }

    public getPokemonShape(idOrName: number | string): Observable<PokemonShape> {
        return this._http.get<PokemonShape>(`${environment.apiUrl}pokemon-shape/${idOrName}`);
    }

    public getPokemonSpecies(idOrName: number | string): Observable<PokemonSpecies> {
        return this._http.get<PokemonSpecies>(`${environment.apiUrl}pokemon-species/${idOrName}`);
    }

    public getStat(idOrName: number | string): Observable<Stat> {
        return this._http.get<Stat>(`${environment.apiUrl}stat/${idOrName}`);
    }

    public getType(idOrName: number | string): Observable<Type> {
        return this._http.get<Type>(`${environment.apiUrl}type/${idOrName}`);
    }
}