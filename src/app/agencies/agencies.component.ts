import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';
import { catchError, Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { concatMap, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Trips } from '../core/api/trips.inteface';
import { ActivatedRoute } from '@angular/router';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  // public agencies!: Agency[]
  public agencies$: Observable<Agency[]>;
  public trips$!: Observable<Trips[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');
  public error:boolean = false;

  // private subscriptor = {
  //   next : (data: Agency[]) =>{this.agencies=data;},

  //   error: (err: Error) => { console.log('hay un fallo', err.message);
  //                     this.error = true;}
  // }

  constructor(private agenciesApi: AgenciesApi, private route: ActivatedRoute,
    private tripsApi: TripsApi) {
    // this.agenciesApi.getAll$().subscribe(this.subscriptor);
    // this.agencies$= this.agenciesApi.getAll$();
    this.search$.subscribe(searchTerm => this.agencies$=this.agenciesApi.getByText$(searchTerm));

    this.agencies$ = this.search$.pipe(
      // map(seachTerm => this.agenciesApi.getByText$(seachTerm))
      switchMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
      // concatMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
    );


    //  const q=  this.route.snapshot.queryParamMap.get('q');
    //   console.log(q);
    // this.route.queryParamMap.subscribe(queryParamMap => {
    //   console.log(queryParamMap.get('q'));
    //   const q = (queryParamMap.get('q'));
    //   if(q){
    //   this.trips$ = this.tripsApi.getByText$(q);
    //   }
    // })

    this.trips$ = this.route.queryParamMap.pipe(
      map(qpm => qpm.get('q')),
      switchMap(agencyId => this.tripsApi.getByText$(agencyId))
    )


  }

  ngOnInit(): void {
  }


  onSearch(searchTerm:string){
    this.search$.next(searchTerm);
    // this.agencies$=this.agenciesApi.getByText$(searchTerm);
  }

  onReload(){
    this.search$.next('');
    // this.agencies$ = this.agenciesApi.getAll$();
  //   this.agenciesApi.getAll$().subscribe( ( data ) => {
  //     // this.agencies = data
  //    },
  //    (err)=>{
  //      console.log('hay un fallo', err.message);
  //      this.error = true;
  //    });
  // }

}
}
