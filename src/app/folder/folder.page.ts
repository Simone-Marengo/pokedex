import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;

  public loading: boolean = false;
  public response: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pokeapiService: PokeapiService
  ) { }

  ngOnInit() {
    this.folder = this._activatedRoute.snapshot.paramMap.get('id');
    this.loadExample();
  }

  async loadExample() {
    this.loading = true;
    this.response = await this._pokeapiService.exampleApi()
      .toPromise()
      .finally(
        () => {
          this.loading = false;
        }
      );
  }
}
