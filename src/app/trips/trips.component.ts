import { Component, OnInit } from '@angular/core';
import { Trips } from '../core/api/trips.inteface';
import { TripsApi } from '../core/api/trips.api';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  public trips$: Observable<Trips[]>;
  public error: boolean = false;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private tripsApi: TripsApi) {
   // this.trips$ = tripsApi.getAll$();
    this.search$.subscribe(searchTerm => this.trips$=this.tripsApi.getByText$(searchTerm));

    this.trips$ = this.search$.pipe(
      switchMap(searchTerm => this.tripsApi.getByText$(searchTerm))
    );

  }

  ngOnInit(): void {
  }

  onReload(){
    this.search$.next('');
    // this.tripsApi.getAll$().subscribe( ( data ) => {
    //   // this.trips = data
    //  },
    //  (err)=>{
    //    console.log('hay un fallo', err.message);
    //    this.error = true;
    //  });;
  }

  onSearch(searchTerm:string){
    this.search$.next(searchTerm);
    // this.agencies$=this.agenciesApi.getByText$(searchTerm);
  }

}
