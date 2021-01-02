import { environment } from 'src/environments/environment';
import { NamedAPIResource } from './NamedAPIResource';
import { PokemonAbility } from './PokemonAbility';
import { PokemonHeldItem } from './PokemonHeldItem';
import { PokemonMove } from './PokemonMove';
import { PokemonSprites } from './PokemonSprites';
import { PokemonStat } from './PokemonStat';
import { PokemonType } from './PokemonType';
import { VersionGameIndex } from './VersionGameIndex';

export class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];

    // TODO: implement a modelmapper
    constructor(pokemon: Pokemon) { 
        for (const property in pokemon) {
            this[property] = pokemon[property];
        }
        this.sortSprites();
        this.sprites.teamSprite = environment.getPokemonDbUrl(this.name);
    }

    private sortSprites() {
        const backSpriteStartLetters = "back";
        let tmpBackSprites = {};
        for (const property in this.sprites) {
            if (property.startsWith(backSpriteStartLetters)) {
                tmpBackSprites[property] = this.sprites[property];
                delete this.sprites[property];
            }
        }
        for (const property in tmpBackSprites) {
            this.sprites[property] = tmpBackSprites[property];
        }

    }

}
