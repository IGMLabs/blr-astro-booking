import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export interface ApiStatus{
  isWorking:boolean;
  errorMessage: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatusStore {

  private state: ApiStatus;
  private state$:BehaviorSubject<ApiStatus>;
  private initialState: ApiStatus={
    isWorking: false,
    errorMessage: ''
  }

  constructor() {
    this.state = this.initialState;
    this.state$ = new BehaviorSubject<ApiStatus>(this.initialState);
  }

  setState(newState: ApiStatus){
    this.state$.next(newState);
  }

  getState$(): Observable<ApiStatus>{
    return this.state$.asObservable();
  }
}



