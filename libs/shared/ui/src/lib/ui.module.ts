import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    CardComponent,
    PageHeaderComponent,
    HeaderTitleComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  exports: [
    CardComponent,
    PageHeaderComponent,
    HeaderTitleComponent,
    LoadingComponent,
    ErrorComponent,
  ],
})
export class UiModule {}
