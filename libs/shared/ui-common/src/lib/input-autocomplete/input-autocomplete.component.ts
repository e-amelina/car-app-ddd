import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent {

  @Input() autocompleteValues: string[] = ['a', 'b','c'];
  @Input() label: string | undefined;

  control = new FormControl(this.autocompleteValues[0]);
  filteredValues: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredValues = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value as string))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.autocompleteValues.filter(val => this._normalizeValue(val).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
