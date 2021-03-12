import { Category } from '@ab/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http.get<Category[]>(url);
  }

  getAllCategories() {
    return [{ name: 'Library' }, { name: 'course' }];
  }
}
