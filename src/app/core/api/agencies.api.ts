import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { Agency } from './agency.inteface';
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AgenciesApi {

  constructor(private http: HttpClient) {

  }

  public getAll$(): Observable<Agency[]>{
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }

  public post(agency: Agency){
    return this.http.post('http://localhost:3000/agencies', agency);
  }

  public getById$(id:string): Observable<Agency>{
    return this.http.get<Agency>('http://localhost:3000/agencies/' + id);
  }


}
