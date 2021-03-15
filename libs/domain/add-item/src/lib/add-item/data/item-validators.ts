import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class ItemValidators {
  static future(control: AbstractControl): any | null {
    const value = control.value as string;
    if (!value) return null;
    const dateValue = Date.parse(value);
    const now = new Date();
    if (now.getTime() >= dateValue) {
      return {
        future: 'Past dates are not allowed',
      };
    } else {
      return null;
    }
  }

  static futureDays(days: number) {
    return function (control: AbstractControl): any | null {
      const value = control.value as string;
      if (!value) return null;
      const dateValue = Date.parse(value);
      const now = new Date();
      if (now.getTime() - dateValue >= days) {
        return {
          future: 'Past dates are not allowed',
        };
      } else {
        return null;
      }
    };
  }

  static samePass(p1: string, p2: string) {
    return function (form: FormGroup): any | null {
      const value1 = form.controls[p1].value;
      const value2 = form.controls[p1].value;
      if (value1 === value2) {
        return null;
      } else {
        return {
          samePass: 'Passwords are distinct',
        };
      }
    };
  }
}

// const suma = function (a:number,b: number) {
//   return a + b;
// }
// const c = suma(1, 2);

// function operar(p, s, operacion) {
//   return operacion(1,3)
// }
// operar(1,2,suma);
