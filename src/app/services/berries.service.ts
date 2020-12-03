import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFlavor } from '../models/BerryFlavor';

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

    public getBerryFirmness(idOrName: number | string): Observable<BerryFirmness> {
        return this._http.get<BerryFirmness>(`${environment.apiUrl}berry-firmness/${idOrName}`);
    }

    public getBerryFlavor(idOrName: number | string): Observable<BerryFlavor> {
        return this._http.get<BerryFlavor>(`${environment.apiUrl}berry-flavor/${idOrName}`);
    }
}