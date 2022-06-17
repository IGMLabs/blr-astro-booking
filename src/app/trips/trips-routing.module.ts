import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips.component';
import { AuthenticatedGuard } from '../auth/api/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: TripsComponent
  },
  {
    path: 'trip/new',
    canLoad: [AuthenticatedGuard],
    loadChildren: () => import('./new-trip/new-trip.module').then(m => m.NewTripModule)
  },
  { path: 'trip/:id', loadChildren: () => import('./trip/trip.module').then(m => m.TripModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
