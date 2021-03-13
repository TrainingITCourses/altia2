import { Injectable } from '@angular/core';
import { Audit } from './models/audit';
import { Err } from './models/err';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuditService extends Store<Audit> {
  constructor() {
    super({ loading: false, error: null });
  }

  startLoading() {
    super.setState({ loading: true, error: null });
  }
  endLoading() {
    super.setState({ loading: false, error: null });
  }
  gotError(error: Err) {
    super.setState({
      loading: false,
      error: error,
    });
  }
}
