import { Injectable } from "@angular/core";
import { Agency } from './agency.inteface';




@Injectable({
  providedIn: 'root'
})
export class AgenciesApi {

  private agencies: Agency[] = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];



  public getAll(){
    return this.agencies;
  }

  public post(agency: Agency){
    this.agencies.push(agency);
  }

  public getById(id:string){
    return this.agencies.find(a=> a.id === id);
  }


}
