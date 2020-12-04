import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {

  public folder: string = 'Items list';
  public loading: boolean = true;
  public items: Item[] = [];
  public noMoreResults: boolean = false;

  constructor(
    private _itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.loadResultsListed(0, null);
  }

  public loadResultsListed(pageNumber: number, event) {
    return new Promise(
      async (resolve) => {
        try {
          if (!this.noMoreResults) {
            const response: any = await this._itemsService
              .getItemsListed(pageNumber ? pageNumber : this.items.length)
              .toPromise();
            if (response.results && response.results.length) {
              this.items = this.items.concat(response.results);
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
