import { Injectable } from "@angular/core";
import * as Pokedex from "pokedex-promise-v2";

@Injectable({
    providedIn: "root",
  })
  export class SharedService {
    private pokedex: Pokedex;

    getPokedex(): Pokedex {
        return this.pokedex ? this.pokedex : new Pokedex();
    }
  }