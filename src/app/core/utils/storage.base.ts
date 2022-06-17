import { Injectable } from "@angular/core";
import { Storage } from './storage.interface';



@Injectable()
export abstract class StorageBase implements Storage {


  getToken(): string{

    return ''
  }


  setToken(token : string){

  }
}
