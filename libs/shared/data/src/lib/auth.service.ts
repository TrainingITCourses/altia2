import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Auth } from './models/auth';
import { Store } from './store';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends Store<Auth> {
  constructor() {
    super({ sessionToken: '', user: undefined, accessError: undefined });
  }

  logInUser(sessionToken: string) {
    const currentState = super.getState();
    currentState.sessionToken = sessionToken;
    //currentState.accessError = false;
    super.setState(currentState);
  }

  gotAuthError() {
    const currentState = super.getState();
    currentState.accessError = true;
    super.setState(currentState);
  }

  getAccessError$(): Observable<void> {
    return super.getState$().pipe(
      map((state: Auth) => state.accessError || false),
      distinctUntilChanged(),
      filter((accessError: boolean) => accessError),
      map(() => undefined)
    );
  }

  getSessionToken$(): Observable<string> {
    return super.select$((state) => state.sessionToken);
  }

  getUser$(): Observable<any> {
    return super.select$((state) => state.user);
  }

  getEmail$(): Observable<string> {
    return super.select$((state) => state.user?.email || '');
  }
}
