import { Component, Input, OnInit } from '@angular/core';
import { PokemonSprites } from 'src/app/models/PokemonSprites';

@Component({
  selector: 'app-sprites-slideshow',
  templateUrl: './sprites-slideshow.component.html',
  styleUrls: ['./sprites-slideshow.component.scss'],
})
export class SpritesSlideshowComponent implements OnInit {

  /*
   * handle the images in the Sprites gived by the get on pokemon
   * other list and versions
   * handle the view to switch between the lists
   */

  @Input('sprites') sprites: PokemonSprites;
  @Input('image') singleImage: string;

  public spritesLables = ['back_default', 'back_female', 'back_shiny', 'back_shiny_female', 'front_default', 'front_female', 'front_shiny', 'front_shiny_female'];

  public spritesEntries: Array<any> = [];
  public spriteIndex: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.showSprites()) {
      const entries = Object.entries(this.sprites)
      this.spritesEntries = entries.filter(entry =>
        entry[1] !== null && this.spritesLables.includes(entry[0])
      );
    }
  }

  public showSprites = (): boolean => this.sprites && !this.singleImage;
  public showSingleImage = (): boolean => this.singleImage && this.singleImage != null;

  public goBack = () => this.spriteIndex === 0 ? null : this.spriteIndex--;
  public goForward = () => this.spriteIndex === (this.spritesEntries.length - 1) ? null : this.spriteIndex++;
  public disableBackBtn = () => this.spriteIndex === 0;
  public disableForwardBtn = () => this.spriteIndex === (this.spritesEntries.length - 1);

}
