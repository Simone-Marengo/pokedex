import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/Move';
import { MovesService } from 'src/app/services/moves.service';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.page.html',
  styleUrls: ['./moves-list.page.scss'],
})
export class MovesListPage implements OnInit {

  public folder: string = 'Items list';
  public loading: boolean = true;
  public moves: Move[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _movesService: MovesService
  ) { }

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public loadResultsListed(pageNumber: number, event) {
    return new Promise(
      async (resolve) => {
        try {
          if (!this.noMoreResults) {
            const response: any = await this._movesService
              .getMoveListed(pageNumber ? pageNumber : this.moves.length)
              .toPromise();
            if (response.results && response.results.length) {
              this.moves = this.moves.concat(response.results);
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
