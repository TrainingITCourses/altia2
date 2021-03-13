import { Audit, AuditService } from '@ab/data';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-audit',
  templateUrl: './audit.widget.html',
  styles: [],
})
export class AuditWidget {
  audit$: Observable<Audit>;

  constructor(service: AuditService) {
    this.audit$ = service.getState$();
  }
}
