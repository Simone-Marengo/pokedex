import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(
    private _http: HttpClient
  ) { }

  public exampleApi(): Observable<any> {
    return this._http.get<any>(`${environment.apiUrl}pokemon/ditto`);
  }
}