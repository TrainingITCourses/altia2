import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ab-ui-input-control',
  templateUrl: './input-control.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
  ],
})
export class InputControlComponent implements ControlValueAccessor {
  @Input() form!: FormGroup;
  @Input() formControlName = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  value: unknown;
  onChange: any;
  onTouch: any;
  onInput(event: any) {
    this.value = event.target.value;
    this.onTouch();
    this.onChange(this.value);
  }
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  hasErrorToShow() {
    const control = this.form.controls[this.formControlName];
    return control.touched && control.invalid;
  }
}
