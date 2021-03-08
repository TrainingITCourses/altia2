import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories$() {
    const url = 'https://angularbuilders-pre.herokuapp.com/api/v1/categories';
    return this.http.get<any>(url).pipe(
      map((results) => results.data),
      tap({
        next: (data) => console.log(data),
      })
    );
  }

  getAllCategories() {
    return [{ name: 'Library' }, { name: 'course' }];
  }
}
