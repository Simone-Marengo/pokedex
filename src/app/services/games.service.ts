import { HttpClient } from '@angular/common/http';
import { Injectable, Version } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Generation } from '../models/Generation';
import { Pokedex } from '../models/Pokedex';
import { VersionGroup } from '../models/VersionGroup';

@Injectable({
    providedIn: 'root'
})
export class GamesService {

    constructor(
        private _http: HttpClient
    ) { }

    public getGeneration(idOrName: number | string): Observable<Generation> {
        return this._http.get<Generation>(`${environment.apiUrl}generation/${idOrName}`);
    }

    public getPokedex(idOrName: number | string): Observable<Pokedex> {
        return this._http.get<Pokedex>(`${environment.apiUrl}pokedex/${idOrName}`);
    }

    public getVersion(idOrName: number | string): Observable<Version> {
        return this._http.get<Version>(`${environment.apiUrl}version/${idOrName}`);
    }

    public getVersionGroup(idOrName: number | string): Observable<VersionGroup> {
        return this._http.get<VersionGroup>(`${environment.apiUrl}version-group/${idOrName}`);
    }
}