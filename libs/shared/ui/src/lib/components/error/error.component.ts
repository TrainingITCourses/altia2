import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'ab-ui-error',
  templateUrl: './error.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
  @Input() props = '';
  error: Card = {
    title: { caption: 'Houston, we have a problem!', icon: '💫' },
    description: ``,
    footer: '',
  };
  ngOnInit(): void {
    if (this.props !== '') {
      this.error = { ...this.error, description: this.props };
    }
  }
}
