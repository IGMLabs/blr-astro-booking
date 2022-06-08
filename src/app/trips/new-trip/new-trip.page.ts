import { Component, OnInit } from '@angular/core';
import { Agency } from '../../core/api/agency.inteface';
import { TripsApi } from '../../core/api/trips.api';
import { Trips } from '../../core/api/trips.inteface';
import { IdNameApi } from '../../core/api/id-name.api';
import { AgenciesApi } from '../../core/api/agencies.api';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css']
})
export class NewTripPage implements OnInit {

  public agencies: Agency[];
  public statuses: string[];

  constructor(idNameApi: IdNameApi, private tripsApi: TripsApi, agenciesApi: AgenciesApi) {
    this.agencies = agenciesApi.getAll();
    this.statuses = idNameApi.getStatuses();
   }

  ngOnInit(): void {
  }

  onSave(newTripData: Trips){
    this.tripsApi.post(newTripData);
  }
}
