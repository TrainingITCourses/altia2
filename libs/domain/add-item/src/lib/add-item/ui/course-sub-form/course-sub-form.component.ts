import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemValidators } from '../../data/item-validators';

@Component({
  selector: 'ab-add-item-course-sub-form',
  templateUrl: './course-sub-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseSubFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  buildGroup() {
    this.form = this.fb.group({
      date: new FormControl('', [ItemValidators.futureDays(3)]),
      teacher: new FormControl(''),
      academy: new FormControl(''),
    });
    return this.form;
  }
}
