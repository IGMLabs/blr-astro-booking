import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { Agency } from './agency.inteface';



@Injectable({
  providedIn: 'root'
})
export class AgenciesApi {

  constructor(private http: HttpClient) {

  }

  public getAll(){
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }

  public post(agency: Agency){
    return this.http.post('http://localhost:3000/agencies', agency);
  }

  public getById(id:string){
    return this.http.get<Agency>('http://localhost:3000/agencies' + id);
  }


}
