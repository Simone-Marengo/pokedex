import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ability } from '../models/Ability';
import { Characteristic } from '../models/Characteristic';
import { EggGroup } from '../models/EggGroup';
import { Gender } from '../models/Gender';
import { GrowthRate } from '../models/GrowthRate';
import { LocationAreaEncounter } from '../models/LocationAreaEncounter';
import { NamesAPIResourseList } from '../models/NamedAPIResourceList';
import { Nature } from '../models/Nature';
import { PokeathlonStat } from '../models/PokeathlonStat';
import { Pokemon } from '../models/Pokemon';
import { PokemonColor } from '../models/PokemonColor';
import { PokemonForm } from '../models/PokemonForm';
import { PokemonHabitat } from '../models/PokemonHabitat';
import { PokemonShape } from '../models/PokemonShape';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { Stat } from '../models/Stat';
import { Type } from '../models/Type';
import * as Pokedex from "pokedex-promise-v2";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    // Any function with the designation "ByName" can also be passed an integer ID. 
    pokedex = new Pokedex();

    constructor(
        private _http: HttpClient
    ) { }

    public getAbility(idOrName: number | string): Promise<Ability> {
        return this.pokedex.getAbilityByName(idOrName);
    }

    public getCharacteristic(id: number): Promise<Characteristic> {
        return this.pokedex.getCharacteristicById(id);
    }

    public getEggGroup(idOrName: number | string): Promise<EggGroup> {
        return this.pokedex.getEggGroupByName(idOrName);
    }

    public getGender(idOrName: number | string): Promise<Gender> {
        return this.pokedex.getEggGenderByName(idOrName);
    }

    public getGrowthRate(idOrName: number | string): Promise<GrowthRate> {
        return this.pokedex.getGrowthRateByName(idOrName);
    }

    public getNature(idOrName: number | string): Promise<Nature> {
        return this.pokedex.getNatureByName(idOrName);
    }

    public getPokeathlonStat(idOrName: number | string): Promise<PokeathlonStat> {
        return this.pokedex.getPokeathlonStatByName(idOrName);
    }

    public getPokemon(idOrName: number | string): Promise<Pokemon> { 
        return this.pokedex.getPokemonByName(idOrName);
    }

    public getPokemonListed(page: number): Promise<NamesAPIResourseList> {
        return this.pokedex.getPokemonsList({ limit: environment.listLimit, offset: page });
    }

    public getPokemonLocationArea(idOrName: number | string): Promise<LocationAreaEncounter> {
        return this.pokedex.getLocationAreaByName(idOrName);
    }

    public getPokemonColor(idOrName: number | string): Promise<PokemonColor> {
        return this.pokedex.getPokemonColorByName(idOrName);
    }

    public getPokemonForm(idOrName: number | string): Promise<PokemonForm> {
        return this.pokedex.getPokemonFormByName(idOrName); 
    }

    public getPokemonHabitat(idOrName: number | string): Promise<PokemonHabitat> {
        return this.pokedex.getPokemonHabitatByName(idOrName); 
    }

    public getPokemonShape(idOrName: number | string): Promise<PokemonShape> {
        return this.pokedex.getPokemonShapeByName(idOrName); 
    }

    public getPokemonSpecies(idOrName: number | string): Promise<PokemonSpecies> {
        return this.pokedex.getPokemonSpeciesByName(idOrName); 
    }

    public getStat(idOrName: number | string): Promise<Stat> {
        return this.pokedex.getStatByName(idOrName);
    }

    public getType(idOrName: number | string): Promise<Type> {
        return this.pokedex.getTypeByName(idOrName);
    }
}