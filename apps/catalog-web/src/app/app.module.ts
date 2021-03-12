import {
  AdapterInterceptor,
  AuditInterceptor,
  AuthInterceptor,
  AuthService,
  DataModule,
} from '@ab/data';
import { TermBoxModule } from '@ab/termbox';
import { UiModule } from '@ab/ui';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
          data: { title: 'A.B Catalog' },
          loadChildren: () =>
            import('@ab/home').then((module) => module.HomeModule),
        },
        {
          path: 'category',
          data: { title: 'A.B Category view' },
          loadChildren: () =>
            import('@ab/category').then((module) => module.CategoryModule),
        },
        {
          path: 'search',
          data: { title: 'A.B Searching' },
          loadChildren: () =>
            import('@ab/search').then((module) => module.SearchModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    UiModule,
    DataModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AdapterInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuditInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    title: Title,
    auth: AuthService
  ) {
    // ToDo: use services for tracking and seo
    router.events
      .pipe(
        filter((routerEvent) => routerEvent instanceof NavigationEnd),
        map(() => activatedRoute.firstChild?.snapshot.data.title),
        filter((title) => !!title)
      )
      .subscribe({
        next: (titleText) => title.setTitle(titleText),
      });

    auth.getAccessError$().subscribe({
      next: () => router.navigate(['login']),
    });
  }
}
