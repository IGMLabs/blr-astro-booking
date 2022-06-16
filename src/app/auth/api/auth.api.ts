import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Register } from './register.interface';
import { Login } from './login.interface';
import { environment } from "src/environments/environment";
import { tap } from 'rxjs';
import { AuthResponse } from './response.interface';





@Injectable({
  providedIn : 'root'
})
export class AuthApi{

  private url = environment.apiUrl;

  public accessToken = '';

  constructor(protected http: HttpClient) {}

  public register$(register: Register) {
    return this.http.post<AuthResponse>(this.url + 'register', register)
    .pipe(tap(response => this.accessToken = response.accessToken ));
  }

  public login$(login: Login) {
    return this.http.post<AuthResponse>(this.url + 'login', login)
    .pipe(tap(response => this.accessToken = response.accessToken ));
  }


}
