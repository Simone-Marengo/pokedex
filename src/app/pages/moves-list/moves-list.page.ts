import { Component, OnInit } from "@angular/core";
import { Move } from "src/app/models/Move";
import { NamesAPIResourseList } from "src/app/models/NamedAPIResourceList";
import { MovesService } from "src/app/services/moves.service";
import { CustomToastsService } from "src/app/shared/services/custom-toasts.service";

@Component({
  selector: "app-moves-list",
  templateUrl: "./moves-list.page.html",
  styleUrls: ["./moves-list.page.scss"],
})
export class MovesListPage implements OnInit {
  public folder: string = "Items list";
  public loading: boolean = true;
  public moves: Move[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _movesService: MovesService,
    private _toastsService: CustomToastsService
  ) {}

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public async loadResultsListed(pageNumber: number, event) {
    try {
      if (!this.noMoreResults) {
        this._movesService
          .getMoveListed(pageNumber ? pageNumber : this.moves.length)
          .toPromise()
          .then((response) => {
            this._loadBerriesById(response, event);
          });
      }
    } catch (error) {
      this._toastsService.loadingErrorToast("TOASTS.pokemon_loading");
    }
  }

  private _loadBerriesById(
    response: NamesAPIResourseList,
    event
  ): Promise<void> {
    return new Promise(async (resolve) => {
      if (response.results && response.results.length) {
        let movesToBeAdded: Array<Move> = [];
        for (let item of response.results) {
          movesToBeAdded.push(
            await this._movesService.getMove(item.name).toPromise()
          );
        }
        this.moves = this.moves.concat(movesToBeAdded);
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

