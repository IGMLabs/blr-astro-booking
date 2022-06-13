import { Injectable } from "@angular/core";
import { CrudApi } from './crud.api';
import { HttpClient } from "@angular/common/http";
import { StatusStore } from './status.store';
import { Booking } from './booking.interface';




@Injectable({
  providedIn: 'root'
})
export class BookingsApi extends CrudApi<Booking> {

  // private url = environment.apiUrl + 'trips/';
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'bookings', statusStore);
  }
}

