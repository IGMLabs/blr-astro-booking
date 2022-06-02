import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  public reloading = false;
  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public getAgenciesLength(){
    return this.agencies.length;
  }

  public reload(list: string){
    console.log("reloading...");
    this.reloading= true;

  }

}
