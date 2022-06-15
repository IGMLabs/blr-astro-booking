import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { Agency } from './agency.inteface';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { delay, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgenciesApi extends CrudApi<Agency> {

  // private url = environment.apiUrl + 'agencies/';
  constructor( http: HttpClient, statusStore: StatusStore) {
    super(http, 'agencies', statusStore);
  }

  // public getByText$ (text:string | null):Observable<Agency[]>{

  //   if(text === null || text ==''){return this.getAll$();}
  //   return this.http.get<Agency[]>(this.url + '?q=' + text).pipe(delay(1000));
  // }

  // public getAll$(): Observable<Agency[]>{
  //   return this.http.get<Agency[]>(this.url);
  // }

  // public post(agency: Agency){
  //   return this.http.post(this.url, agency);
  // }

  // public getById$(id:string): Observable<Agency>{
  //   return this.http.get<Agency>(this.url + id);
  // }


}
