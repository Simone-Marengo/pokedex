import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';

@Injectable({
    providedIn: 'root'
})
export class EncountersService {

    constructor(
        private _http: HttpClient
    ) { }

    public getEncounterMethod(idOrName: number | string): Observable<EncounterMethod> {
        return this._http.get<EncounterMethod>(`${environment.apiUrl}encounter-method/${idOrName}`);
    }

    public getEncounterCondition(idOrName: number | string): Observable<EncounterCondition> {
        return this._http.get<EncounterCondition>(`${environment.apiUrl}encounter-condition/${idOrName}`);
    }

    public getEncounterConditionValue(idOrName: number | string): Observable<EncounterConditionValue> {
        return this._http.get<EncounterConditionValue>(`${environment.apiUrl}encounter-condition-value/${idOrName}`);
    }
}