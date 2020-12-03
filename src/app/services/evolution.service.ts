import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EvolutionChain } from '../models/EvolutionChain';
import { EvolutionTrigger } from '../models/EvolutionTrigger';

@Injectable({
    providedIn: 'root'
})
export class EvolutionService {

    constructor(
        private _http: HttpClient
    ) { }

    public getEvolutionChain(id: number): Observable<EvolutionChain> {
        return this._http.get<EvolutionChain>(`${environment.apiUrl}evolution-chain/${id}`);
    }

    public getEvolutionTrigger(idOrName: number | string): Observable<EvolutionTrigger> {
        return this._http.get<EvolutionTrigger>(`${environment.apiUrl}evolution-trigger/${idOrName}`);
    }
}