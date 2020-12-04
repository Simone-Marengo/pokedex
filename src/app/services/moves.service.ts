import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Move } from '../models/Move';
import { MoveAilment } from '../models/MoveAilment';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveCategory } from '../models/MoveCategory';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveTarget } from '../models/MoveTarget';
import { NamesAPIResourseList } from '../models/NamedAPIResourceList';

@Injectable({
    providedIn: 'root'
})
export class MovesService {

    constructor(
        private _http: HttpClient
    ) { }

    public getMove(idOrName: number | string): Observable<Move> {
        return this._http.get<Move>(`${environment.apiUrl}move/${idOrName}`);
    }

    public getMoveListed(page: number): Observable<NamesAPIResourseList> {
        return this._http.get<NamesAPIResourseList>(`${environment.apiUrl}move/?limit=${environment.listLimit}&offset=${page}`);
    }

    public getMoveAilment(idOrName: number | string): Observable<MoveAilment> {
        return this._http.get<MoveAilment>(`${environment.apiUrl}move-ailment/${idOrName}`);
    }

    public getMoveBattleStyle(idOrName: number | string): Observable<MoveBattleStyle> {
        return this._http.get<MoveBattleStyle>(`${environment.apiUrl}move-battle-style/${idOrName}`);
    }

    public getMoveCategory(idOrName: number | string): Observable<MoveCategory> {
        return this._http.get<MoveCategory>(`${environment.apiUrl}move-category/${idOrName}`);
    }

    public getMoveDamageClass(idOrName: number | string): Observable<MoveDamageClass> {
        return this._http.get<MoveDamageClass>(`${environment.apiUrl}move-damage-class/${idOrName}`);
    }
    public getMoveLearnMethod(idOrName: number | string): Observable<MoveLearnMethod> {
        return this._http.get<MoveLearnMethod>(`${environment.apiUrl}move-learn-method/${idOrName}`);
    }

    public getMoveTarget(idOrName: number | string): Observable<MoveTarget> {
        return this._http.get<MoveTarget>(`${environment.apiUrl}move-target/${idOrName}`);
    }
}