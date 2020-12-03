import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContestEffect } from '../models/ContestEffect';
import { ContestType } from '../models/ContestType';
import { SuperContestEffect } from '../models/SuperContestEffect';

@Injectable({
    providedIn: 'root'
})
export class ContestsService {

    constructor(
        private _http: HttpClient
    ) { }

    public getContestType(idOrName: number | string): Observable<ContestType> {
        return this._http.get<ContestType>(`${environment.apiUrl}contest-type/${idOrName}`);
    }

    public getContestEffect(id: number): Observable<ContestEffect> {
        return this._http.get<ContestEffect>(`${environment.apiUrl}contest-effect/${id}`);
    }

    public getSuperContestEffect(id: number): Observable<SuperContestEffect> {
        return this._http.get<SuperContestEffect>(`${environment.apiUrl}super-contest-effect/${id}`);
    }
}