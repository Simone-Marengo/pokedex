import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonAbility } from 'src/app/models/PokemonAbility';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { CustomToastsService } from '../../services/custom-toasts.service';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.scss'],
})
export class AbilityDetailComponent implements OnInit {

  @Input('ability') ability: PokemonAbility;

  public loading: boolean = true;
  public detail: any;

  public descriptions: {
    effect: string,
    short_effect: string
  };

  constructor(
    private _pokeapiService: PokeapiService,
    private _modalController: ModalController,
    private _toastsService: CustomToastsService
  ) { }

  ngOnInit() {
    this._getAbilityDetail();
  }

  private async _getAbilityDetail() {
    try {
      const { url } = this.ability.ability;
      this.detail = await this._pokeapiService.launchAPIByUrl(url).toPromise();
      this._setAbilityDescription();
      this.loading = false;
    }
    catch (error) {
      this._toastsService.loadingErrorToast("TOASTS.ability_loading_error");
    }
  }

  private _setAbilityDescription() {
    const { effect_entries } = this.detail;
    const entry = effect_entries.find(item => item.language.name === 'en');
    const { effect, short_effect } = entry;
    this.descriptions = {
      effect,
      short_effect
    };
  }

  dismissModal = () => this._modalController.dismiss();

}
