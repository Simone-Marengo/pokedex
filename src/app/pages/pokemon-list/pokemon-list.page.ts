import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { NamesAPIResourseList } from "src/app/models/NamedAPIResourceList";
import { Pokemon } from "src/app/models/Pokemon";
import { PokemonService } from "src/app/services/pokemon.service";
import { CustomToastsService } from "src/app/shared/services/custom-toasts.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.page.html",
  styleUrls: ["./pokemon-list.page.scss"],
})
export class PokemonListPage implements OnInit {
  public folder: string = "Pokemon list";
  public loading: boolean = true;
  public pokemons: Pokemon[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _pokemonService: PokemonService,
    private _toastsService: CustomToastsService,
    public tranlateService: TranslateService
  ) {}

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public async loadResultsListed(pageNumber: number, event) {
    try {
      if (!this.noMoreResults) {
        this._pokemonService
          .getPokemonListed(pageNumber ? pageNumber : this.pokemons.length)
          .toPromise()
          .then(async (response) => {
            this._loadPokemonsById(response, event);
          });
      }
    } catch (error) {
      this._toastsService.loadingErrorToast("TOASTS.pokemon_loading");
    }
  }

  private _loadPokemonsById(
    response: NamesAPIResourseList,
    event
  ): Promise<void> {
    return new Promise(async (resolve) => {
      if (response.results && response.results.length) {
        let pokemonToBeAdded: Array<Pokemon> = [];
        for (let pokemon of response.results) {
          pokemonToBeAdded.push(
            await this._pokemonService.getPokemon(pokemon.name).toPromise()
          );
        }
        this.pokemons = this.pokemons.concat(pokemonToBeAdded);
      } else {
        this.noMoreResults = true;
      }
      if (event) {
        event.target.complete();
      }
      // this set on loading on false matters only on the init of the page
      this.loading = false;
      resolve();
    });
  }
}
