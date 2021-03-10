import { TermBoxModule } from '@ab/termbox';
import { UiModule } from '@ab/ui';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
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
          data: { title: ' AB Catalog' },
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
export class AppModule {
  constructor(router: Router, activatedRoute: ActivatedRoute, title: Title) {
    router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map(() => activatedRoute.firstChild?.snapshot.data.title),
        filter((title) => !!title)
      )
      .subscribe({
        next: (titleText) => title.setTitle(titleText),
      });
  }
}
