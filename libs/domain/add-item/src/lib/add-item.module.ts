import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddItemPage } from './add-item/add-item.page';
import { FormComponent } from './add-item/ui/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddItemPage },
    ]),
  ],
  declarations: [AddItemPage, FormComponent],
})
export class AddItemModule {}
