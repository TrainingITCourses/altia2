import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderTitle } from '../../models/header-title';

@Component({
  selector: 'ab-ui-page-header',
  templateUrl: './page-header.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() props: HeaderTitle = { caption: '', link: '', icon: '' };
}
