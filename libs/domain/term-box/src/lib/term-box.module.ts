import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TermBoxWidget } from './term-box/term-box.widget';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TermBoxWidget],
  exports: [TermBoxWidget],
})
export class TermBoxModule {}
