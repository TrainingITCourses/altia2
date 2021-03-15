import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseSubFormComponent } from '../course-sub-form/course-sub-form.component';

@Component({
  selector: 'ab-add-item-form',
  templateUrl: './form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  props = {
    categories: [
      { id: 'libraries', name: 'Libraries' },
      { id: 'ui-components', name: 'UI components' },
      { id: 'courses', name: 'Courses' },
    ],
  };
  form!: FormGroup;

  @ViewChild(CourseSubFormComponent, { static: true })
  courseSubForm!: CourseSubFormComponent;

  private newItem = {
    name: 'PrimeNg',
    description: '',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
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
        course: this.courseSubForm.buildGroup(),
      },
      []
    );
  }

  onSubmit() {
    const value = this.form.value;
    this.newItem = { ...value, name: value.name.toUpperCase() };
    console.log(this.newItem);
    this.form.reset();

    // this.form.controls['name'].patchValue('altia');
    // this.form.controls['name'].clearValidators();
  }
}

// name: "RxJs"
// description: "Asynchronous and event-based programs by using observable sequences"
// categoryId: "libraries"
// url: "https://rxjs-dev.firebaseapp.com/guide/overview"
// price: 99
// id: "rxjs"
// ownerId: "albertobasalo"

// categoryId: "events"
// description: "The World's Premier Angular Event"
// event: {price: null, date: "2021-04-22", location: "On Line"}
// date: "2021-04-22"
// location: "On Line"
// price: null
// id: "ngconf-2021"
// name: "ngConf 2021"
// ownerId: "albertobasalo"
// url: "https://www.2021.ng-conf.org/"
