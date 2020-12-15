import { Component, Input, OnInit } from '@angular/core';
import { NamedAPIResource } from 'src/app/models/NamedAPIResource';

@Component({
  selector: 'app-type-label',
  templateUrl: './type-label.component.html',
  styleUrls: ['./type-label.component.scss'],
})
export class TypeLabelComponent implements OnInit {

  @Input('typeName') typeName: NamedAPIResource;

  constructor() { }

  ngOnInit() {
  }

  getLabelClass = () => `bg-label-${this.typeName}-color`;
}
