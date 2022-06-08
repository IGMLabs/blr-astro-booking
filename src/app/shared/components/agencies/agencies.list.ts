import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from '../../../core/api/agency.inteface';


@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  @Input() public agencies: Agency[]= [];
  @Output() private reload = new EventEmitter();

  public reloading = false;



  public onReloadClick(list: string){
    console.log("reloading...");
    this.reloading= true;
    this.reload.emit();

  }

  public getAgenciesLength(){
    return this.agencies.length;
  }
  ngOnInit(): void {
  }
}
