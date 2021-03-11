import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ab-term-box',
  templateUrl: './term-box.widget.html',
  styles: [],
})
export class TermBoxWidget {
  termControl: FormControl;

  constructor(fb: FormBuilder, router: Router, route: ActivatedRoute) {
    this.termControl = fb.control('');

    this.intializeFromQueryParams(route);
    this.updateQueryParamsOnChanges(router);
  }

  private updateQueryParamsOnChanges(router: Router) {
    // ToDo: gestionar tecleos del usuario
    this.termControl.valueChanges.subscribe({
      next: (searchTerm) =>
        router.navigate(['search'], {
          queryParams: { term: searchTerm },
          queryParamsHandling: 'merge',
        }),
    });
  }

  private intializeFromQueryParams(route: ActivatedRoute) {
    route.queryParams
      .pipe(filter((queryParams) => !!queryParams.term))
      .subscribe({
        next: (queryParams) => this.termControl.patchValue(queryParams.term),
      });
  }
}
