import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputAutocompleteComponent} from "./input-autocomplete/input-autocomplete.component";
import {CustomRadioButtonComponent} from "./custom-radio-button/custom-radio-button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [InputAutocompleteComponent, CustomRadioButtonComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [ InputAutocompleteComponent, CustomRadioButtonComponent]
})
export class SharedUiCommonModule {}
