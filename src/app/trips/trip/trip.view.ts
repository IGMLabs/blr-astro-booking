import { Component, Input, OnInit } from '@angular/core';
import { Trips } from '../../core/api/trips.inteface';

@Component({
  selector: 'app-trip-view',
  templateUrl: './trip.view.html',
  styleUrls: ['./trip.view.css']
})
export class TripView implements OnInit {

  @Input() tripId!: string;
  @Input() trip?:Trips;


  constructor() { }

  ngOnInit(): void {
  }

}
