import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-label',
  templateUrl: './pokemon-label.component.html',
  styleUrls: ['./pokemon-label.component.scss'],
})
export class PokemonLabelComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {}

}
