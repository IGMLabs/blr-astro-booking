import { Component, OnInit } from '@angular/core';
import { StatusStore } from '../api/status.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isWorking= false;
  hasError = false;

  constructor(statusStore: StatusStore) {
    statusStore.getState$().subscribe(status =>{
      this.isWorking= status.isWorking;
      this.hasError = (status.errorMessage !== '');
    })
  }

  ngOnInit(): void {
  }

}
