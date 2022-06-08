import { Component, Input, OnInit } from '@angular/core';
import { Agency } from '../../core/api/agency.inteface';

@Component({
  selector: 'app-agency-view',
  templateUrl: './agency.view.html',
  styleUrls: ['./agency.view.css']
})
export class AgencyView implements OnInit {

  @Input() agencyId!: string;
  @Input() agency?:Agency;


  constructor() { }

  ngOnInit(): void {
  }

}
