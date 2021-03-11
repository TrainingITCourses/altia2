import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './category.page.html',
  styles: [],
})
export class CategoryPage {
  category = this.route.snapshot.data.category;
  // ToDo: get items (compare with/without resolvers)
  constructor(private route: ActivatedRoute) {}
}
