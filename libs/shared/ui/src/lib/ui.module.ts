import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { InputControlComponent } from './components/input-control/input-control.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    CardComponent,
    PageHeaderComponent,
    HeaderTitleComponent,
    LoadingComponent,
    ErrorComponent,
    InputControlComponent,
  ],
  exports: [
    CardComponent,
    PageHeaderComponent,
    HeaderTitleComponent,
    LoadingComponent,
    ErrorComponent,
    ReactiveFormsModule,
    InputControlComponent,
    RouterModule,
  ],
})
export class UiModule {}
