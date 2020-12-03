import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  public folder: string = 'Pokemon list';
  public loading: boolean = true;
  public pokemons: Pokemon[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this._getPokemonsFirstPage();
  }

  private _getPokemonsFirstPage() {
    return new Promise(
      async (resolve) => {
        try {
          const response: any = await this._pokemonService
            .getPokemonListed(0)
            .toPromise();
          this.pokemons = response.results;
        }
        catch (error) {
          console.log('error in loading pokemons');
        }
        finally {
          this.loading = false;
          resolve();
        }
      });
  }

  public loadPokemonsListed(event) {
    return new Promise(
      async (resolve) => {
        try {
          if (!this.noMoreResults) {
            const response: any = await this._pokemonService
              .getPokemonListed(this.pokemons.length)
              .toPromise();
            if (response.results && response.results.length) {
              this.pokemons = this.pokemons.concat(response.results);
            } else {
              this.noMoreResults = true;
            }
          }
        }
        catch (error) {
          console.log('error in loading pokemons');
        }
        finally {
          this.loading = false;
          event.target.complete();
          resolve();
        }
      });
  }
}
