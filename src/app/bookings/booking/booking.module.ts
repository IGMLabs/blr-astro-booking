import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingPage } from './booking.page';
import { BookingView } from './booking.view';


@NgModule({
  declarations: [
    BookingPage,
    BookingView
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
