import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'ab-add-item-form',
  templateUrl: './form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  props = {
    categories: [
      { id: 'libraries', name: 'Libraries' },
      { id: 'ui-components', name: 'UI components' },
    ],
  };
  form: FormGroup;

  private newItem = {
    name: 'PrimeNg',
    description: '',
  };
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl(this.newItem.name.toLowerCase(), [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250),
      ]),
      categoryId: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.min(0), Validators.max(999)]),
    });
  }

  onSubmit() {
    const value = this.form.value;
    this.newItem = { ...value, name: value.name.toUpperCase() };
    console.log(this.newItem);
    this.form.reset();

    this.form.controls['name'].patchValue('altia');
    this.form.controls['name'].clearValidators();
  }

  hasErrorToShow(controlName: string) {
    const control = this.form.controls[controlName];
    return control.touched && control.invalid;
  }
}

// name: "RxJs"
// description: "Asynchronous and event-based programs by using observable sequences"
// categoryId: "libraries"
// url: "https://rxjs-dev.firebaseapp.com/guide/overview"
// price: 99
// id: "rxjs"
// ownerId: "albertobasalo"
