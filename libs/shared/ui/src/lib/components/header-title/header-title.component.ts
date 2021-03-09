import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderTitle } from '../../models/header-title';

@Component({
  selector: 'ab-ui-header-title',
  templateUrl: './header-title.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent {
  @Input() props: HeaderTitle = { caption: '', link: '', icon: '' };
}
