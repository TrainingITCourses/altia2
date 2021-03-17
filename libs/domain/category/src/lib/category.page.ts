import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './data/category.service';

@Component({
  templateUrl: './category.page.html',
  styles: [],
})
export class CategoryPage {
  category$;
  items$;
  // category = this.route.snapshot.data.category;
  // ToDo: get items (compare with/without resolvers)
  constructor(private route: ActivatedRoute, private service: CategoryService) {
    const categoryId = route.snapshot.params.id;
    this.category$ = service.getCategoryById$(categoryId);
    this.items$ = service.getCategoryItemsById$(categoryId);
  }

  // Paralelo

  // Paralelo pero esperando

  // Cascada real (a partir del params observable)
}
