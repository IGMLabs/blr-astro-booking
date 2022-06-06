import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {

  tripId: string ='Viaje Orbital'


  constructor( activatedRoute: ActivatedRoute ) {
    this.tripId = activatedRoute.snapshot.paramMap.get('id')|| '';
  }

  ngOnInit(): void {
  }

}
