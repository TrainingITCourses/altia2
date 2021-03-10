import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly endPoint = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories/';

  constructor(private http: HttpClient) {}

  getCategoryById$(categoryId: string) {
    const url = this.endPoint +  categoryId ;
    return this.http
      .get<{ data: any }>(url)
      .pipe(map((results) => results.data));
  }

  getCategoryItemsById$(categoryId: string) {
    const url = this.endPoint +  categoryId +  '/items';
    return this.http
      .get<{ data: any }>(url)
      .pipe(map((results) => results.data));
  }
}
