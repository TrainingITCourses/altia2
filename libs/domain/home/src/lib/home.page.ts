import { Category } from '@ab/models';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
      switchMap((categoriesAPI) =>
        this.getCategoriesWithCounter$(categoriesAPI)
      ),
      tap({
        next: () => {
          this.loading = false;
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
          cdr.markForCheck();
        },
      })
    );
  }

  getCategoriesWithCounter$(categories: Category[]) {
    return this.getCounters$(categories).pipe(
      map((counters) => this.fillCategoriesWithCounters(categories, counters))
    );
  }

  getCounters$(categories: Category[]) {
    const counters$: Observable<number>[] = categories.map((category) =>
      this.service.getCountItemsByCategoryId$(category.id || '')
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
