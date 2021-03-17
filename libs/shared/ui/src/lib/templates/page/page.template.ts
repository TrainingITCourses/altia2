import { Component, Input } from '@angular/core';
import { HeaderTitle } from '../../models/header-title';

@Component({
  selector: 'ab-ui-page',
  templateUrl: './page.template.html',
  styles: [],
})
export class PageTemplate {
  @Input() headerProps: HeaderTitle = { caption: '', link: '', icon: '' };
}
