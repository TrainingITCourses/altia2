import { Audit, AuditService } from '@ab/data';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular.Builders:Catalog';
  audit$: Observable<Audit>;

  constructor(service: AuditService) {
    this.audit$ = service.getState$();
  }
}
