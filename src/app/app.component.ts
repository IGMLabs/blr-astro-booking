import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Astro Bookings';
  public subtitle = 'Welcome on Board';
  public autor = 'Bruno Lopez';
  public autorUrl = 'https://www.instagram.com/frostsky_3';
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
  public reloading = false;
  public getAgenciesLength(){
    return this.agencies.length;
  }
  public reload(list: string){
    console.log("reloading...");
    this.reloading= true;

  }

}
