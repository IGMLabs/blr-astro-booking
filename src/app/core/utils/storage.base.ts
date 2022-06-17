import { Injectable } from "@angular/core";



@Injectable()
export abstract class StorageBase {


  getToken(): string{

    return ''
  }


  setToken(token : string){

  }
}
