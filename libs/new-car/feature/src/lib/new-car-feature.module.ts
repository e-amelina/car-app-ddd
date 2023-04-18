import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewCarComponent} from "./new-car/new-car.component";
import {SharedUiCommonModule} from "@car-app/shared/ui-common";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedUiCommonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [ NewCarComponent],
  exports: [NewCarComponent]
})
export class NewCarFeatureModule {}
