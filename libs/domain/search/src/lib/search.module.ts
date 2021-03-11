import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchPage } from './search/search.page';
import { ItemsComponent } from './search/ui/items/items.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchPage },
    ]),
  ],
  declarations: [SearchPage, ItemsComponent],
})
export class SearchModule {}
