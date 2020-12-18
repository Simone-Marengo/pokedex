import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonAbility } from 'src/app/models/PokemonAbility';
import { PokemonService } from 'src/app/services/pokemon.service';
import { AbilityDetailComponent } from 'src/app/shared/components/ability-detail/ability-detail.component';
import { CustomToastsService } from 'src/app/shared/services/custom-toasts.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

  public folder: string = "";
  public loading: boolean = true;
  public pokemon: Pokemon;

  public detailLabels = ['id', 'weight', 'height'];

  constructor(
    private _route: ActivatedRoute,
    private _pokemonService: PokemonService,
    private _toastsService: CustomToastsService,
    private _modalController: ModalController
  ) { }

  ngOnInit() {
    this._loadData();
  }

  private _loadData() {
    try {
      this._route.params.subscribe(
        async params => {
          if (params) {
            const { id } = params;
            this.pokemon = await this._pokemonService
              .getPokemon(id)
              .toPromise();

            this.pokemon = new Pokemon(this.pokemon);
            this.folder = `Detail of ${this.pokemon.name}`;
            this.loading = false;
          }
        });
    }
    catch (error) {
      this._toastsService.loadingErrorToast("TOASTS.pokemon_loading");
    }
  }

  public async gotoPokemonAbilityDetail(abilityItem: PokemonAbility) {
    const modal = await this._modalController.create({
      component: AbilityDetailComponent,
      componentProps: {
        'ability': abilityItem
      }
    });
    return await modal.present();
  }

}
