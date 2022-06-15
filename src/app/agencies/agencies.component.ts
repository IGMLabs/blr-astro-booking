import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';
import { catchError, Observable, of, Subject } from 'rxjs';
import { concatMap, exhaustMap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  // public agencies!: Agency[]
  public agencies$: Observable<Agency[]>;
  private search$: Subject<string> = new Subject();
  public error:boolean = false;

  // private subscriptor = {
  //   next : (data: Agency[]) =>{this.agencies=data;},

  //   error: (err: Error) => { console.log('hay un fallo', err.message);
  //                     this.error = true;}
  // }

  constructor(private agenciesApi: AgenciesApi) {
    // this.agenciesApi.getAll$().subscribe(this.subscriptor);
    this.agencies$= this.agenciesApi.getAll$();
    this.search$.subscribe(searchTerm => this.agencies$=this.agenciesApi.getByText$(searchTerm));

    this.agencies$ = this.search$.pipe(
      // map(seachTerm => this.agenciesApi.getByText$(seachTerm))
      switchMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
      // concatMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap(searchTerm => this.agenciesApi.getByText$(searchTerm))
    );

  }

  ngOnInit(): void {
  }


  onSearch(searchTerm:string){

    this.search$.next(searchTerm);

    // this.agencies$=this.agenciesApi.getByText$(searchTerm);

  }

  onReload(){
    this.agencies$ = this.agenciesApi.getAll$();
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
