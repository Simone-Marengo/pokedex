import { Component, Input, OnInit } from '@angular/core';
import { PokemonSprites } from 'src/app/models/PokemonSprites';

@Component({
  selector: 'app-sprites-slideshow',
  templateUrl: './sprites-slideshow.component.html',
  styleUrls: ['./sprites-slideshow.component.scss'],
})
export class SpritesSlideshowComponent implements OnInit {

  @Input('sprites') sprites: PokemonSprites;
  @Input('image') singleImage: string;

  public spritesEntries: Array<any> = [];

  constructor() { }

  ngOnInit() {
    if (this.showSprites()) {
      this.spritesEntries = Object.entries(this.sprites);
    }
  }

  public showSprites = (): boolean => this.sprites && !this.singleImage;

}
