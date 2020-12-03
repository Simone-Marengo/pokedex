import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Language } from '../models/Language';
import { Machine } from '../models/Machine';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(
    private _http: HttpClient
  ) { }

  /*
    for paginations use .../?limit=number&&offset=number
    limit is the max number gived back from the api
    offset is the page
  */

  public exampleApi(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}pokemon/ditto`);
  }

  public getMachine(id: number): Observable<Machine> {
    return this._http.get<Machine>(`${environment.apiUrl}/machine${id}`);
  }

  public getLanguage(idOrName: number | string): Observable<Language> {
    return this._http.get<Language>(`${environment.apiUrl}language/${idOrName}`);
  }
}