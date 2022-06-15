import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from '../../../core/api/agency.inteface';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  @Input() public agencies: Agency[]= [];
  @Output() private reload = new EventEmitter();

  public reloading = false;

constructor(private router: Router, private activeRoute: ActivatedRoute) {

}

  public onReloadClick(list: string){
    console.log("reloading...");
    this.reloading= true;
    this.reload.emit();

  }


  public onSearchClick(agencyId : string){
    this.router.navigate([],
      {
        relativeTo: this.activeRoute,
        queryParams: {q: agencyId},
        queryParamsHandling: 'merge'
      } )


  }


  public getAgenciesLength(){
    return this.agencies.length;
  }
  ngOnInit(): void {
  }
}
