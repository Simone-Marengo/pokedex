import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EncounterMethod } from '../models/EncounterMethod';
import { Item } from '../models/Item';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemCategory } from '../models/ItemCategory';
import { ItemPocket } from '../models/ItemPocket';
import { NamesAPIResourseList } from '../models/NamedAPIResourceList';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {

    constructor(
        private _http: HttpClient
    ) { }

    public getItem(idOrName: number | string): Observable<Item> {
        return this._http.get<Item>(`${environment.apiUrl}item/${idOrName}`);
    }

    public getItemsListed(page: number): Observable<NamesAPIResourseList> {
        return this._http.get<NamesAPIResourseList>(`${environment.apiUrl}item/?limit=${environment.listLimit}&offset=${page}`);
    }

    public getItemAttribute(idOrName: number | string): Observable<ItemAttribute> {
        return this._http.get<ItemAttribute>(`${environment.apiUrl}item-attribute/${idOrName}`);
    }

    public getItemCategory(idOrName: number | string): Observable<ItemCategory> {
        return this._http.get<ItemCategory>(`${environment.apiUrl}item-category/${idOrName}`);
    }

    public getItemFlingEffect(idOrName: number | string): Observable<EncounterMethod> {
        return this._http.get<EncounterMethod>(`${environment.apiUrl}item-fling-effect/${idOrName}`);
    }

    public getItemPocket(idOrName: number | string): Observable<ItemPocket> {
        return this._http.get<ItemPocket>(`${environment.apiUrl}item-pocket/${idOrName}`);
    }
}