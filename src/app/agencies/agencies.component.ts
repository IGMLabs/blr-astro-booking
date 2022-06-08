import { Component, OnInit } from '@angular/core';
import { Agency } from '../core/api/agency.inteface';
import { AgenciesApi } from '../core/api/agencies.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  public agencies!: Agency[]


  constructor(private agenciesApi: AgenciesApi) {
    this.agencies = agenciesApi.getAll();
  }

  ngOnInit(): void {
  }

  onReload(){
    this.agencies = this.agenciesApi.getAll();
  }

}
