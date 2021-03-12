import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export abstract class Store<StateType> {
  private state$ = new BehaviorSubject<StateType>(this.initiaState);

  constructor(private initiaState: StateType) {}

  public getState() {
    const currentValue = this.state$.value;
    return this.getClone(currentValue);
  }

  public getState$() {
    return this.state$.asObservable();
  }

  public setState(value: StateType) {
    const newState = this.getClone(value);
    this.state$.next(newState);
  }

  select$(projection: (arg0: StateType) => any) {
    return this.getState$().pipe(
      map((state) => projection(state)),
      distinctUntilChanged()
    );
  }

  private getClone(source: StateType) {
    const target = JSON.stringify(source);
    return JSON.parse(target);
  }
}
