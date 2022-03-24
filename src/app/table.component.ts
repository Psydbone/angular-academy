import { Component } from '@angular/core';
import { ArrayService, Person } from './array.service';

@Component({
  selector: 'table-component',
  templateUrl: `./table.component.html`,

  styleUrls: ['esercizio.component.css'],
})
export class EsercizioComponent {
  data: Person[];
  constructor(private es: ArrayService) {
    this.data = this.es.getArray();
  }
}
