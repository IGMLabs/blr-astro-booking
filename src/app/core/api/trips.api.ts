import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trips } from './trips.inteface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TripsApi {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Trips[]>{
    return this.http.get<Trips[]>('http://localhost:3000/trips');
  }

  public post(trip: Trips){
    return this.http.post('http://localhost:3000/trips/', trip);
  }

  public getById$(id:string): Observable<Trips>{
    return this.http.get<Trips>('http://localhost:3000/trips/' + id);
  }


}
