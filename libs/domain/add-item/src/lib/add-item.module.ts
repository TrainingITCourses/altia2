import { UiModule } from '@ab/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddItemPage } from './add-item/add-item.page';
import { CourseSubFormComponent } from './add-item/ui/course-sub-form/course-sub-form.component';
import { FormComponent } from './add-item/ui/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddItemPage },
    ]),
  ],
  declarations: [AddItemPage, FormComponent, CourseSubFormComponent],
})
export class AddItemModule {}
