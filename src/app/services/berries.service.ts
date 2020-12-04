import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFlavor } from '../models/BerryFlavor';
import { NamesAPIResourseList } from '../models/NamedAPIResourceList';

@Injectable({
    providedIn: 'root'
})
export class BerriesService {

    constructor(
        private _http: HttpClient
    ) { }

    public getBerry(idOrName: number | string): Observable<Berry> {
        return this._http.get<Berry>(`${environment.apiUrl}berry/${idOrName}`);
    }

    public getBerriesListed(page: number): Observable<NamesAPIResourseList> {
        return this._http.get<NamesAPIResourseList>(`${environment.apiUrl}berry/?limit=${environment.listLimit}&offset=${page}`);
    }

    public getBerryFirmness(idOrName: number | string): Observable<BerryFirmness> {
        return this._http.get<BerryFirmness>(`${environment.apiUrl}berry-firmness/${idOrName}`);
    }

    public getBerryFlavor(idOrName: number | string): Observable<BerryFlavor> {
        return this._http.get<BerryFlavor>(`${environment.apiUrl}berry-flavor/${idOrName}`);
    }
}