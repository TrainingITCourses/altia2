import { Category } from '@ab/models';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HomeService } from './data/home.service';
@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  categories$: Observable<Category[]>;
  loading = true;
  error = '';

  constructor(private service: HomeService, cdr: ChangeDetectorRef) {
    this.categories$ = service.getCategories$().pipe(
      tap({
        next: (categoriesAPI) => {
          this.loading = false;
          cdr.markForCheck();
          this.fillCategories$(categoriesAPI);
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
          cdr.markForCheck();
        },
      })
    );
  }

  fillCategories$(categories: Category[]) {
    this.categories$ = this.getCounters$(categories).pipe(
      map((counters) => this.fillCategoriesWithCounters(categories, counters))
    );
  }

  getCounters$(categories: Category[]) {
    const counters$: Observable<number>[] = categories.map((c) =>
      this.service.getCountItemsByCategoryId$(c.id || '')
    );
    return forkJoin(counters$);
  }
  fillCategoriesWithCounters(categories: Category[], counters: number[]) {
    return categories.map((category: Category, index: number) => {
      const itemsCount = counters[index];
      return { ...category, itemCount: itemsCount };
    });
  }
}
