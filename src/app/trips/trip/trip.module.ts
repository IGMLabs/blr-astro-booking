import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripPage } from './trip.page';


@NgModule({
  declarations: [
    TripPage
  ],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
