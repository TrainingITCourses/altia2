import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinDirective,
      multi: true,
    },
  ],
})
export class MinDirective implements Validator {
  @Input() min = '0';

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.min(parseInt(this.min))(control);

    // const minValidator = Validators.min(this.min);
    // const validation = minValidator(control);
    // return validation;

    // const value = control.value;
    // if (value >= this.min) {
    //   return null;
    // } else {
    //   return { min: 'Min value required ' + this.min };
    // }
  }
}
