import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-radio-button',
  templateUrl: './custom-radio-button.component.html',
  styleUrls: ['./custom-radio-button.component.scss']
})
export class CustomRadioButtonComponent implements ControlValueAccessor, OnInit {
  @Input() value: string = 'any';
  model: any;
  onChange = (value: any) => {};
  onTouched = () => {};
  
  constructor(@Self() private ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.ngControl['control']?.valueChanges.subscribe(value => {
      // Check to ensure the value wasn't already set (Template driven forms)
      if(this.model === value) return;
      this.writeValue(value);
    });
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  writeValue(value: any) {
      this.model = value;
  }

  //This gets called on click of the element
  select() {
      this.model = this.model === this.value ? null : this.value;
      this.onChange(this.model);
  }
}
