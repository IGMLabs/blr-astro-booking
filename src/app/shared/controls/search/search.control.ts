import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { fromEvent, Observable, tap } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css']
})
export class SearchControl implements OnInit {

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;

  @Output() search = new EventEmitter<string>();

  searchInput$!: Observable<string>;


  constructor() { }

  ngOnInit(): void {
    this.searchInput$=fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      map((event: unknown) => {
        return (event as any).target.value
      }),
      tap((searchTerm)=> console.log('antes',searchTerm)),
      debounceTime(500),
      tap((searchTerm)=> console.log('despues',searchTerm)),
      filter((search)=>search.length > 2 ),
      tap((searchTerm)=> console.log('filtrado',searchTerm)),
      distinctUntilChanged(),
      tap((searchTerm)=> console.log('cambiado',searchTerm)),
      tap((searchtermino)=> this.search.emit(searchtermino))
    );
  }

}
