import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'ab-ui-loading',
  templateUrl: './loading.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  loading: Card = {
    title: { caption: 'Waiting', icon: '📡' },
    description: 'No data yet',
    footer: '',
  };
}
