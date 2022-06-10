import { Component, OnInit } from '@angular/core';
import { Trips } from '../core/api/trips.inteface';
import { TripsApi } from '../core/api/trips.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  public trips$: Observable<Trips[]>
  public error: boolean = false;

  constructor(private tripsApi: TripsApi) {
    this.trips$ = tripsApi.getAll$();
  }

  ngOnInit(): void {
  }

  onReload(){
    this.tripsApi.getAll$().subscribe( ( data ) => {
      // this.trips = data
     },
     (err)=>{
       console.log('hay un fallo', err.message);
       this.error = true;
     });;
  }

}
