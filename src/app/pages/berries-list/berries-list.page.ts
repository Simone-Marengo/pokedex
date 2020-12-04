import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { Berry } from "src/app/models/Berry";
import { NamesAPIResourseList } from "src/app/models/NamedAPIResourceList";
import { BerriesService } from "src/app/services/berries.service";
import { CustomToastsService } from "src/app/shared/services/custom-toasts.service";

@Component({
  selector: "app-berries-list",
  templateUrl: "./berries-list.page.html",
  styleUrls: ["./berries-list.page.scss"],
})
export class BerriesListPage implements OnInit {
  public folder: string = "Berries list";
  public loading: boolean = true;
  public berries: Berry[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _berriesService: BerriesService,
    private _toastsService: CustomToastsService
  ) {}

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public async loadResultsListed(pageNumber: number, event) {
    try {
      if (!this.noMoreResults) {
        this._berriesService
          .getBerriesListed(pageNumber ? pageNumber : this.berries.length)
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
        let berriesToBeAdded: Array<Berry> = [];
        for (let berry of response.results) {
          berriesToBeAdded.push(
            await this._berriesService.getBerry(berry.name).toPromise()
          );
        }
        this.berries = this.berries.concat(berriesToBeAdded);
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
