import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorInterceptor } from './api/error.interceptor';
import { AuthInterceptor } from '../auth/api/auth.interceptor';
import { StorageBase } from './utils/storage.base';
import { LocalStorage } from './utils/local-storage.service';
import { SessionStorage } from './utils/session-storage.service';
import { environment } from '../../environments/environment';
import { Storage } from './utils/storage.interface';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    // {provide: StorageBase, useClass: LocalStorage},
    // {provide: StorageBase, useClass: SessionStorage},
    {
      provide: StorageBase, useFactory: (): Storage => {
        if(environment.production) return new SessionStorage();
        else return new LocalStorage();
      }
    },


  ],
})
export class CoreModule { }
