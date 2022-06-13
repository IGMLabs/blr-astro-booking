import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agency } from '../../core/api/agency.inteface';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  agencyId: string;
  agency$:Observable<Agency>;


  constructor( activatedRoute: ActivatedRoute, agenciesApi: AgenciesApi ) {
    this.agencyId = activatedRoute.snapshot.paramMap.get('id')|| '';
    this.agency$= agenciesApi.getById$(this.agencyId);
  }

  ngOnInit(): void {
  }

}
