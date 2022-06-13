import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsList } from './components/bookings/bookings.list';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    BookingsList
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ReloadingComponent,
    RouterModule,
    AgenciesList,
    TripsList,
    BookingsList,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
