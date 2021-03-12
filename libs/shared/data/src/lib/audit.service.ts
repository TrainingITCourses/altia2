import { Injectable } from '@angular/core';
import { Audit } from './models/audit';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuditService extends Store<Audit> {
  constructor() {
    super({ loading: false, error: undefined });
  }

  startLoading() {
    super.setState({ loading: true, error: undefined });
  }
  endLoading() {
    super.setState({ loading: false, error: undefined });
  }
  gotError(error: { status: any; message: any }) {
    super.setState({
      loading: false,
      error: { status: error.status, message: error.message },
    });
  }
}
