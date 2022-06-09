import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trips } from '../../core/api/trips.inteface';
import { TripsApi } from '../../core/api/trips.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {

  tripId: string;
  trip$:Observable<Trips>;


  constructor( activatedRoute: ActivatedRoute, tripsApi: TripsApi ) {
    this.tripId = activatedRoute.snapshot.paramMap.get('id')|| '';
     this.trip$= tripsApi.getById$(this.tripId);
  }

  ngOnInit(): void {
  }

}
