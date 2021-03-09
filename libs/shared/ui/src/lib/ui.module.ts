import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, PageHeaderComponent, HeaderTitleComponent, LoadingComponent, ErrorComponent],
  exports: [CardComponent, PageHeaderComponent, HeaderTitleComponent, LoadingComponent, ErrorComponent],
})
export class UiModule {}
