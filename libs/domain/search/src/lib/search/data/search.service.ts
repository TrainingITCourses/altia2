import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly endPoint =
    'https://angularbuilders-pre.herokuapp.com/api/v1/items/';

  constructor(private http: HttpClient) {}

  getByQuery$(searchTerm: string) {
    const term = searchTerm.toLocaleLowerCase();
    return this.http
      .get<any[]>(this.endPoint)
      .pipe(map((items) => this.filterBySearchTerm(items, term)));
  }

  private filterBySearchTerm(items: any[], term: string) {
    return items.filter((item) => this.byTerm(item, term));
  }

  private byTerm(item: any, term: string) {
    if (item.name.toLocaleLowerCase().includes(term)) return true;
    if (item.description?.toLocaleLowerCase().includes(term)) return true;
    return false;
  }
}
