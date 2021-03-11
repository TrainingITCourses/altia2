import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ab-search-items',
  templateUrl: './items.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  @Input() items: any[] = [];
}
