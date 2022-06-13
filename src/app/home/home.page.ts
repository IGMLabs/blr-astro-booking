import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TripsApi } from '../core/api/trips.api';
import { Trips } from '../core/api/trips.inteface';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';
import { Observable } from 'rxjs';
import { BookingsApi } from '../core/api/bookings.api';
import { Booking } from '../core/api/booking.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  public title = 'Astro Bookings';

  public reloading = false;

  public trips$!: Observable<Trips[]>
  public agencies$!: Observable<Agency[]>
  public bookings$!: Observable<Booking[]>


  constructor(private agenciesApi: AgenciesApi, private tripsApi: TripsApi,
              private bookingsApi: BookingsApi) {
    this.agencies$= agenciesApi.getAll$();
    this.trips$ = tripsApi.getAll$();
    this.bookings$ = bookingsApi.getAll$();
  }


  ngOnInit(): void {
  }

}
