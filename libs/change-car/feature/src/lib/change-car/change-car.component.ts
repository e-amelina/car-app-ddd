import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-car',
  templateUrl: './change-car.component.html',
  styleUrls: ['./change-car.component.scss']
})
export class ChangeCarComponent {
  group: FormGroup;
  name: FormControl;
  phone: FormControl;
  constructor(formBuilder: FormBuilder) {
    this.group = formBuilder.group({
      radios: [true]
    })

    this.name = formBuilder.control('');
    this.phone = formBuilder.control('');
  }
}
