import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripPage } from './new-trip.page';
import { SharedModule } from '../../shared/shared.module';
import { NewTripForm } from './new-trip.form';


@NgModule({
  declarations: [
    NewTripPage,
    NewTripForm
  ],
  imports: [
    CommonModule,
    NewTripRoutingModule,
    SharedModule
  ]
})
export class NewTripModule { }
