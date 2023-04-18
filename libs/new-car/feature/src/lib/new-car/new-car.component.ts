import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent {
  group: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.group = formBuilder.group({
      radios: [true]
    })
  }
}
