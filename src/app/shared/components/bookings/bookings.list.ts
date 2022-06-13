import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Booking } from '../../../core/api/booking.interface';


@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {

  @Input() public bookings: Booking[]= []
  @Output() private reload = new EventEmitter();

  public reloading = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onReloadClick(list: string){
    console.log("reloading...");
    this.reloading= true;
    this.reload.emit();

  }

}
