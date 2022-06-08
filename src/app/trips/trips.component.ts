import { Component, OnInit } from '@angular/core';
import { Trips } from '../core/api/trips.inteface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  public trips: Trips[]

  constructor(private tripsApi: TripsApi) {
    this.trips = tripsApi.getAll();
  }

  ngOnInit(): void {
  }

  onReload(){
    this.trips = this.tripsApi.getAll();
  }

}
