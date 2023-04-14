import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Input() all: number = 0;
  @Input() male: number = 0;
  @Input() female: number = 0;

  @Output() selectRadio = new EventEmitter<string>();

  selectFilter: string = 'all';

  sendSelectRadio(selectFilter: string) {
    this.selectRadio.emit(selectFilter);
  }
}
