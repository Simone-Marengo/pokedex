import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationArea } from '../models/LocationArea';
import { PalParkArea } from '../models/PalParkArea';
import { Region } from '../models/Region';

@Injectable({
    providedIn: 'root'
})
export class LocationsService {

    constructor(
        private _http: HttpClient
    ) { }

    public getLocation(idOrName: number): Observable<Location> {
        return this._http.get<Location>(`${environment.apiUrl}location/${idOrName}`);
    }

    public getLocationArea(idOrName: number | string): Observable<LocationArea> {
        return this._http.get<LocationArea>(`${environment.apiUrl}location-area/${idOrName}`);
    }

    public getPalParkArea(idOrName: number | string): Observable<PalParkArea> {
        return this._http.get<PalParkArea>(`${environment.apiUrl}pal-park-area/${idOrName}`);
    }

    public getRegion(idOrName: number | string): Observable<Region> {
        return this._http.get<Region>(`${environment.apiUrl}region/${idOrName}`);
    }
}