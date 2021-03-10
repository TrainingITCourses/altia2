import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './search.page.html',
  styles: [],
})
export class SearchPage {
  searchTerm$;

  constructor(route: ActivatedRoute) {
    this.searchTerm$ = route.queryParams;

    // ToDo: buscar cuando cambie el término de búqueda
  }
}
