import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-tem-box',
  templateUrl: './term-box.widget.html',
  styles: [],
})
export class TermBoxWidget {
  termControl: FormControl;

  constructor(fb: FormBuilder, router: Router) {
    this.termControl = fb.control('');
    this.termControl.valueChanges.subscribe({
      next: (searchTerm) =>
        router.navigate(['search'], {
          queryParams: { term: searchTerm },
          queryParamsHandling: 'merge',
        }),
    });
  }
}
