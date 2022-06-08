import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trips } from '../../../core/api/trips.inteface';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {

  @Input() public trips: Trips[]= []
  @Output() private reload = new EventEmitter();


  public reloading = false;


  ngOnInit(): void {
  }

  public onReloadClick(list: string){
    console.log("reloading...");
    this.reloading= true;
    this.reload.emit();

  }

}
