import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-add-item-form',
  templateUrl: './form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
