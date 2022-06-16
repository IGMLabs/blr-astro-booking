import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthApi } from './auth.api';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authApi: AuthApi) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
          : Observable<HttpEvent<unknown>> {
    const accestToken = this.authApi.accessToken;
    if(accestToken !== ''){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accestToken}`,
        },
      });
    }
      return next.handle(request);
  }



}
