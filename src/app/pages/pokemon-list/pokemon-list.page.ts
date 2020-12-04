import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NamesAPIResourseList } from 'src/app/models/NamedAPIResourceList';
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
    private _pokemonService: PokemonService,
    private _toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public async loadResultsListed(pageNumber: number, event) {
    try {
      if (!this.noMoreResults) {
        this._pokemonService
          .getPokemonListed(pageNumber ? pageNumber : this.pokemons.length)
          .toPromise()
          .then(
            async response => {
              if (response.results && response.results.length) {
                this._loadPokemonsById(response);
              } else {
                this.noMoreResults = true;
              }
            }
          );
      }
    }
    catch (error) {
      this._loadingPokemonErrorToast(error);
    }
    finally {
      this.loading = false;
      if (event) { event.target.complete(); }
    }
  }

  private _loadPokemonsById(response: NamesAPIResourseList): Promise<void> {
    return new Promise(
      async resolve => {
        let pokemonToBeAdded: Array<Pokemon> = [];
        for (let pokemon of response.results) {
          pokemonToBeAdded.push(await this._pokemonService
            .getPokemon(pokemon.name)
            .toPromise()
          );
        }
        this.pokemons = this.pokemons.concat(pokemonToBeAdded);
        resolve();
      }
    );
  }

  private _loadingPokemonErrorToast = async (error) => {
    const toast = await this._toastController.create({
      header: 'Error in loading pokemon',
      message: error,
      color: 'danger'
    });
    toast.present();
  }
}
