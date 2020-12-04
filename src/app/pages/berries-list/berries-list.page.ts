import { Component, OnInit } from '@angular/core';
import { Berry } from 'src/app/models/Berry';
import { BerriesService } from 'src/app/services/berries.service';

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.page.html',
  styleUrls: ['./berries-list.page.scss'],
})
export class BerriesListPage implements OnInit {

  public folder: string = 'Berries list';
  public loading: boolean = true;
  public berries: Berry[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _berriesService: BerriesService
  ) { }

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public loadResultsListed(pageNumber: number, event) {
    return new Promise(
      async (resolve) => {
        try {
          if (!this.noMoreResults) {
            const response: any = await this._berriesService
              .getBerriesListed(pageNumber ? pageNumber : this.berries.length)
              .toPromise();
            if (response.results && response.results.length) {
              this.berries = this.berries.concat(response.results);
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
          if (event) {
            event.target.complete();
          }
          resolve();
        }
      });
  }
}
