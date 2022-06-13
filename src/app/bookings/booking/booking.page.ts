import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookingsApi } from '../../core/api/bookings.api';
import { Booking } from '../../core/api/booking.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.css']
})
export class BookingPage implements OnInit {

  bookingId: string;
  bookings$:Observable<Booking>;


  constructor( activatedRoute: ActivatedRoute, bookingsApi: BookingsApi ) {
    this.bookingId = activatedRoute.snapshot.paramMap.get('id')|| '';
    this.bookings$= bookingsApi.getById$(this.bookingId);
  }

  ngOnInit(): void {
  }
}
