import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trips } from './trips.inteface';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { delay, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TripsApi extends CrudApi<Trips> {

  // private url = environment.apiUrl + 'trips/';
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'trips', statusStore);
  }

  // public getByText$ (text:string | null):Observable<Trips[]>{

  //   if(text === null || text ==''){return this.getAll$();}
  //   return this.http.get<Trips[]>(this.url + '?q=' + text).pipe(delay(1000));
  // }
  // public getAll$(): Observable<Trips[]>{
  //   return this.http.get<Trips[]>(this.url);
  // }

  // public post(trip: Trips){
  //   return this.http.post(this.url, trip);
  // }

  // public getById$(id:string): Observable<Trips>{
  //   return this.http.get<Trips>(this.url + id);
  // }


}
