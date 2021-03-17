import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CategoryService } from './data/category.service';
@Component({
  templateUrl: './category.page.html',
  styles: [],
})
export class CategoryPage {
  categoryId: string;
  category$!: Observable<any>;
  items$!: Observable<any[]>;
  allResults$!: Observable<[any, any[]]>;

  // category = this.route.snapshot.data.category;
  // ToDo: get items (compare with/without resolvers)
  constructor(private route: ActivatedRoute, private service: CategoryService) {
    this.categoryId = route.snapshot.params.id;
    //this.parallel();
    //this.realParallel();
    this.realFall();
  }

  parallel() {
    // Paralelo
    this.category$ = this.service.getCategoryById$(this.categoryId);
    this.items$ = this.service.getCategoryItemsById$(this.categoryId);
  }

  realParallel() {
    // Paralelo pero esperando (selects en forms - )
    this.category$ = this.service.getCategoryById$(this.categoryId);
    this.items$ = this.service.getCategoryItemsById$(this.categoryId);

    this.allResults$ = forkJoin([this.category$, this.items$]).pipe(
      tap({
        next: (results) => {
          const [category, items] = results;
          console.warn(`${category.name} has ${items.length} items`);
        },
      })
    );
  }

  realFall() {
    // Cascada real (a partir del params observable)
    // this.route.params.subscribe({
    //   next: params => {
    //     const categoryId = params.id;
    //     this.category$ = this.service.getCategoryById$(categoryId);
    //     this.items$ = this.service.getCategoryItemsById$(categoryId);
    //   }
    // })

    this.allResults$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((categoryId) =>
        forkJoin([
          this.service.getCategoryById$(categoryId),
          this.service.getCategoryItemsById$(categoryId),
        ])
      ),
      tap({
        next: (results) => {
          const [category, items] = results;
          console.warn(`${category.name} has ${items.length} items`);
        },
      })
    );
  }
}
