import { Category } from '@ab/models';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HomeService } from './data/home.service';
@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  //categories: any[] = [];
  categories$: Observable<Category[]>;
  loading = true;
  error = '';
  constructor(service: HomeService, cdr: ChangeDetectorRef) {
    // this.categories = service.getAllCategories();

    this.categories$ = service.getCategories$().pipe(
      tap({
        next: () => (this.loading = false),

        error: (err) => {
          this.error = err.message;
          this.loading = false;
          cdr.markForCheck();
        },
      })
    );
    // service.getCategories$().subscribe({
    //   next: (data) => {
    //     this.categories = data;
    //     console.log(this.categories);
    //     cdr.markForCheck();
    //   },
    // });
  }
}
