import { Category } from '@ab/models';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-home-categories',
  templateUrl: './categories.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  @Input() categories: Category[] = [];
}
