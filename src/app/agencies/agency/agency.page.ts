import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css']
})
export class AgencyPage implements OnInit {

  agencyId: string ='Lugo nasa'


  constructor( activatedRoute: ActivatedRoute ) {
    this.agencyId = activatedRoute.snapshot.paramMap.get('id')|| '';
  }

  ngOnInit(): void {
  }

}
