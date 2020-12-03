import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ability } from '../models/Ability';
import { Berry } from '../models/Berry';
import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFlavor } from '../models/BerryFlavor';
import { Characteristic } from '../models/Characteristic';
import { ContestEffect } from '../models/ContestEffect';
import { ContestType } from '../models/ContestType';
import { EggGroup } from '../models/EggGroup';
import { EncounterCondition } from '../models/EncounterCondition';
import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';
import { EvolutionChain } from '../models/EvolutionChain';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
import { Gender } from '../models/Gender';
import { Generation } from '../models/Generation';
import { GrowthRate } from '../models/GrowthRate';
import { Item } from '../models/Item';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemCategory } from '../models/ItemCategory';
import { ItemPocket } from '../models/ItemPocket';
import { Language } from '../models/Language';
import { LocationArea } from '../models/LocationArea';
import { LocationAreaEncounter } from '../models/LocationAreaEncounter';
import { Machine } from '../models/Machine';
import { Move } from '../models/Move';
import { MoveAilment } from '../models/MoveAilment';
import { MoveBattleStyle } from '../models/MoveBattleStyle';
import { MoveCategory } from '../models/MoveCategory';
import { MoveDamageClass } from '../models/MoveDamageClass';
import { MoveLearnMethod } from '../models/MoveLearnMethod';
import { MoveTarget } from '../models/MoveTarget';
import { Nature } from '../models/Nature';
import { PalParkArea } from '../models/PalParkArea';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { Pokedex } from '../models/Pokedex';
import { Pokemon } from '../models/Pokemon';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { Region } from '../models/Region';
import { Stat } from '../models/Stat';
import { SuperContestEffect } from '../models/SuperContestEffect';
import { Type } from '../models/Type';
import { Version } from '../models/Version';
import { VersionGroup } from '../models/VersionGroup';

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

  public getBerry(idOrName: number | string): Observable<Berry> {
    return this._http.get<Berry>(`${environment.apiUrl}berry/${idOrName}`);
  }

  public getBerryFirmness(idOrName: number | string): Observable<BerryFirmness> {
    return this._http.get<BerryFirmness>(`${environment.apiUrl}berry-firmness/${idOrName}`);
  }

  public getBerryFlavor(idOrName: number | string): Observable<BerryFlavor> {
    return this._http.get<BerryFlavor>(`${environment.apiUrl}berry-flavor/${idOrName}`);
  }

  public getContestType(idOrName: number | string): Observable<ContestType> {
    return this._http.get<ContestType>(`${environment.apiUrl}contest-type/${idOrName}`);
  }

  public getContestEffect(id: number): Observable<ContestEffect> {
    return this._http.get<ContestEffect>(`${environment.apiUrl}contest-effect/${id}`);
  }

  public getSuperContestEffect(id: number): Observable<SuperContestEffect> {
    return this._http.get<SuperContestEffect>(`${environment.apiUrl}super-contest-effect/${id}`);
  }

  public getEncounterMethod(idOrName: number | string): Observable<EncounterMethod> {
    return this._http.get<EncounterMethod>(`${environment.apiUrl}encounter-method/${idOrName}`);
  }

  public getEncounterCondition(idOrName: number | string): Observable<EncounterCondition> {
    return this._http.get<EncounterCondition>(`${environment.apiUrl}encounter-condition/${idOrName}`);
  }

  public getEncounterConditionValue(idOrName: number | string): Observable<EncounterConditionValue> {
    return this._http.get<EncounterConditionValue>(`${environment.apiUrl}encounter-condition-value/${idOrName}`);
  }

  public getEvolutionChain(id: number): Observable<EvolutionChain> {
    return this._http.get<EvolutionChain>(`${environment.apiUrl}evolution-chain/${id}`);
  }

  public getEvolutionTrigger(idOrName: number | string): Observable<EvolutionTrigger> {
    return this._http.get<EvolutionTrigger>(`${environment.apiUrl}evolution-trigger/${idOrName}`);
  }

  public getGeneration(idOrName: number | string): Observable<Generation> {
    return this._http.get<Generation>(`${environment.apiUrl}generation/${idOrName}`);
  }

  public getPokedex(idOrName: number | string): Observable<Pokedex> {
    return this._http.get<Pokedex>(`${environment.apiUrl}pokedex/${idOrName}`);
  }

  public getVersion(idOrName: number | string): Observable<Version> {
    return this._http.get<Version>(`${environment.apiUrl}version/${idOrName}`);
  }

  public getVersionGroup(idOrName: number | string): Observable<VersionGroup> {
    return this._http.get<VersionGroup>(`${environment.apiUrl}version-group/${idOrName}`);
  }

  public getItem(idOrName: number | string): Observable<Item> {
    return this._http.get<Item>(`${environment.apiUrl}item/${idOrName}`);
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

  public getMachine(id: number): Observable<Machine> {
    return this._http.get<Machine>(`${environment.apiUrl}/machine${id}`);
  }

  public getMove(idOrName: number | string): Observable<Move> {
    return this._http.get<Move>(`${environment.apiUrl}move/${idOrName}`);
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

  public getAbility(idOrName: number | string): Observable<Ability> {
    return this._http.get<Ability>(`${environment.apiUrl}ability/${idOrName}`);
  }

  public getCharacteristic(id: number): Observable<Characteristic> {
    return this._http.get<Characteristic>(`${environment.apiUrl}characteristic/${id}`);
  }

  public getEggGroup(idOrName: number | string): Observable<EggGroup> {
    return this._http.get<EggGroup>(`${environment.apiUrl}egg-group/${idOrName}`);
  }

  public getGender(idOrName: number | string): Observable<Gender> {
    return this._http.get<Gender>(`${environment.apiUrl}gender/${idOrName}`);
  }

  public getGrowthRate(idOrName: number | string): Observable<GrowthRate> {
    return this._http.get<GrowthRate>(`${environment.apiUrl}growth-rate/${idOrName}`);
  }

  public getNature(idOrName: number | string): Observable<Nature> {
    return this._http.get<Nature>(`${environment.apiUrl}nature/${idOrName}`);
  }

  public getPokeathlonStat(idOrName: number | string): Observable<PokeathlonStat> {
    return this._http.get<PokeathlonStat>(`${environment.apiUrl}pokeathlon-stat/${idOrName}`);
  }

  public getPokemon(idOrName: number | string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${environment.apiUrl}pokemon/${idOrName}`);
  }

  public getPokemonLocationArea(idOrName: number | string): Observable<LocationAreaEncounter> {
    return this._http.get<LocationAreaEncounter>(`${environment.apiUrl}pokemon/${idOrName}/encounters`);
  }

  public getPokemonColor(idOrName: number | string): Observable<PokemonColor> {
    return this._http.get<PokemonColor>(`${environment.apiUrl}pokemon-color/${idOrName}`);
  }

  public getPokemonForm(idOrName: number | string): Observable<PokemonForm> {
    return this._http.get<PokemonForm>(`${environment.apiUrl}pokemon-form/${idOrName}`);
  }

  public getPokemonHabitat(idOrName: number | string): Observable<PokemonHabitat> {
    return this._http.get<PokemonHabitat>(`${environment.apiUrl}pokemon-habitat/${idOrName}`);
  }

  public getPokemonShape(idOrName: number | string): Observable<PokemonShape> {
    return this._http.get<PokemonShape>(`${environment.apiUrl}pokemon-shape/${idOrName}`);
  }

  public getPokemonSpecies(idOrName: number | string): Observable<PokemonSpecies> {
    return this._http.get<PokemonSpecies>(`${environment.apiUrl}pokemon-species/${idOrName}`);
  }

  public getStat(idOrName: number | string): Observable<Stat> {
    return this._http.get<Stat>(`${environment.apiUrl}stat/${idOrName}`);
  }

  public getType(idOrName: number | string): Observable<Type> {
    return this._http.get<Type>(`${environment.apiUrl}type/${idOrName}`);
  }

  public getLanguage(idOrName: number | string): Observable<Language> {
    return this._http.get<Language>(`${environment.apiUrl}language/${idOrName}`);
  }
}