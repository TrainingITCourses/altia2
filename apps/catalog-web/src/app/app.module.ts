import { TermBoxModule } from '@ab/termbox';
import { UiModule } from '@ab/ui';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TermBoxModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@ab/home').then((module) => module.HomeModule),
        },
        {
          path: 'category',
          loadChildren: () =>
            import('@ab/category').then((module) => module.CategoryModule),
        },
        {
          path: 'search',
          loadChildren: () =>
            import('@ab/search').then((module) => module.SearchModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
