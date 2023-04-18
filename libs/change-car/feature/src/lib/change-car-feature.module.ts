import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangeCarComponent} from "./change-car/change-car.component";
import {SharedUiCommonModule} from "@car-app/shared/ui-common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
  imports: [CommonModule, SharedUiCommonModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [ ChangeCarComponent],
  exports: [ChangeCarComponent]
})
export class ChangeCarFeatureModule {}
