import { Component, OnInit } from '@angular/core';
import { Login } from '../api/login.interface';
import { AuthApi } from '../api/auth.api';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authApi: AuthApi) { }

  ngOnInit(): void {
  }

  onLogin(login: Login) {
    this.authApi
      .login$(login)
      .pipe(tap((response) => console.warn(response)))
      .subscribe();
  }

}
