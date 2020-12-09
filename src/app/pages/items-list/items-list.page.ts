import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/models/Item";
import { NamesAPIResourseList } from "src/app/models/NamedAPIResourceList";
import { ItemsService } from "src/app/services/items.service";
import { CustomToastsService } from "src/app/shared/services/custom-toasts.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  public folder: string = "Items list";
  public loading: boolean = true;
  public items: Item[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _itemsService: ItemsService,
    private _toastsService: CustomToastsService
  ) { }

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public async loadResultsListed(pageNumber: number, event) {
    try {
      if (!this.noMoreResults) {
        this._itemsService
          .getItemsListed(pageNumber ? pageNumber : this.items.length)
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
        let itemsToBeAdded: Array<Item> = [];
        for (let item of response.results) {
          itemsToBeAdded.push(
            await this._itemsService.getItem(item.name).toPromise()
          );
        }
        this.items = this.items.concat(itemsToBeAdded);
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
