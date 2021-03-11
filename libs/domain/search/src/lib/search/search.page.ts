import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchService } from './data/search.service';

@Component({
  templateUrl: './search.page.html',
  styles: [],
})
export class SearchPage {
  caption$: Observable<string>;
  items$: Observable<any[]>;

  constructor(route: ActivatedRoute, service: SearchService) {
    // ToDo: buscar sólo cuando cambie el término de búqueda
    const searchTerm$ = route.queryParams.pipe(
      map((queryParams) => queryParams.term)
    );
    this.caption$ = searchTerm$.pipe(
      map(
        (searchTerm) =>
          `Searching for ${searchTerm ? searchTerm : 'everything'}`
      )
    );
    this.items$ = searchTerm$.pipe(
      switchMap((searchTerm) => service.getByQuery$(searchTerm))
    );
  }
}
