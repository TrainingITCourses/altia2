import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPage } from './search/search.page';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchPage },
    ]),
  ],
  declarations: [SearchPage],
})
export class SearchModule {}
