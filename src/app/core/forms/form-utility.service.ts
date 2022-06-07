import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormUtilityService {

  constructor() { }




  public getDashIdTrip(destino: string, id: string): string {
    const str = destino + ' ' + id;
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }

  public getDashIdAgency(str: string): string {
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }



}
