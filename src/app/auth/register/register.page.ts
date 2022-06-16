import { Component, OnInit } from '@angular/core';
import { Register } from '../api/register.interface';
import { AuthApi } from '../api/auth.api';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(private authApi: AuthApi) { }

  ngOnInit(): void {
  }

  onRegister(register: Register) {
    this.authApi
      .register$(register)
      .pipe(tap((response) => console.warn(response)))
      .subscribe();
  }

}
