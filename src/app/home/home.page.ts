import { Component, OnInit } from '@angular/core';
import { TripsApi } from '../core/api/trips.api';
import { Trips } from '../core/api/trips.inteface';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public title = 'Astro Bookings';

  public reloading = false;

  public trips!: Trips[]
  public agencies!: Agency[]


  constructor(private agenciesApi: AgenciesApi, private tripsApi: TripsApi) {
    agenciesApi.getAll$().subscribe( (data) => {
      this.agencies = data;
    });
    tripsApi.getAll().subscribe( (data) => {
      this.trips = data;
    });;
  }


  ngOnInit(): void {
  }

}
