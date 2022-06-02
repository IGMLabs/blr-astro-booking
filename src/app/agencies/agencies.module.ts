import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './agencies.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgenciesComponent
  ],
  imports: [
    CommonModule,
    AgenciesRoutingModule,
    SharedModule
  ]
})
export class AgenciesModule { }
