import { Category } from '@ab/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http
      .get<{ data: Category[] }>(url)
      .pipe(map((results) => results.data));
  }

  getAllCategories() {
    return [{ name: 'Library' }, { name: 'course' }];
  }
}
