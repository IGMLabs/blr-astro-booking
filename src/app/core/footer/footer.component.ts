import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public subtitle = 'Welcome on Board';
  public autor = 'Bruno Lopez';
  public autorUrl = 'https://www.instagram.com/frostsky_3';

  constructor() { }

  ngOnInit(): void {
  }

}
