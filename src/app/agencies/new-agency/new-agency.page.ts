import { Component, OnInit } from '@angular/core';
import { IdName } from 'src/app/core/api/id-name.inteface';
import { IdNameApi } from '../../core/api/id-name.api';
import { Agency } from '../../core/api/agency.inteface';
import { AgenciesApi } from '../../core/api/agencies.api';

@Component({
  selector: 'app-new-agency',
  templateUrl: './new-agency.page.html',
  styleUrls: ['./new-agency.page.css']
})
export class NewAgencyPage implements OnInit {

  public ranges: IdName[];
  public statuses: string[];

  constructor(idNameApi: IdNameApi, private agenciesApi: AgenciesApi) {
    this.ranges = idNameApi.getRanges();
    this.statuses = idNameApi.getStatuses();
   }

  ngOnInit(): void {
  }

  onSave(newAgencyData: Agency){
    this.agenciesApi.post(newAgencyData);
  }

}
