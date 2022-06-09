import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  // public agencies!: Agency[]
  public agencies$: Observable<Agency[]>;
  public error:boolean = false;

  // private subscriptor = {
  //   next : (data: Agency[]) =>{this.agencies=data;},

  //   error: (err: Error) => { console.log('hay un fallo', err.message);
  //                     this.error = true;}
  // }

  constructor(private agenciesApi: AgenciesApi) {
    // this.agenciesApi.getAll$().subscribe(this.subscriptor);
    this.agencies$= this.agenciesApi.getAll$();
  }

  ngOnInit(): void {
  }

  onReload(){
    this.agenciesApi.getAll$().subscribe( ( data ) => {
      // this.agencies = data
     },
     (err)=>{
       console.log('hay un fallo', err.message);
       this.error = true;
     });
  }

}
