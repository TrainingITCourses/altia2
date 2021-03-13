import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuditWidget } from './audit/audit.widget';

@NgModule({
  imports: [CommonModule],
  declarations: [AuditWidget],
  exports: [AuditWidget],
})
export class AuditModule {}
