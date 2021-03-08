import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './data/home.service';

@Component({
  templateUrl: './home.page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  //categories: any[] = [];
  categories$: Observable<any[]>;
  constructor(service: HomeService, cdr: ChangeDetectorRef) {
    // this.categories = service.getAllCategories();
    this.categories$ = service.getCategories$();
    // service.getCategories$().subscribe({
    //   next: (data) => {
    //     this.categories = data;
    //     console.log(this.categories);
    //     cdr.markForCheck();
    //   },
    // });
  }
}
