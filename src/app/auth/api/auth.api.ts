import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Register } from './register.interface';
import { Login } from './login.interface';
import { environment } from "src/environments/environment";





@Injectable({
  providedIn : 'root'
})
export class AuthApi{

  private url = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  public register$(register: Register) {
    return this.http.post<Register>(this.url + 'register', register);
  }

  public login$(login: Login) {
    return this.http.post<Login>(this.url + 'login', login);
  }


}
