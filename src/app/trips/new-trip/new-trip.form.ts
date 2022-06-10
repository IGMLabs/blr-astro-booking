import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormBase } from '../../core/forms/form.base';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from '../../core/api/agency.inteface';
import { TripsApi } from '../../core/api/trips.api';
import { Trips } from '../../core/api/trips.inteface';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css'],
})
export class NewTripForm extends FormBase implements OnInit {
  autoN = 5;
  @Input() public agencies: Agency[]=[];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Trips>();

  constructor(formBuilder: FormBuilder, fvs: FormValidationsService
    ,fms : FormMessagesService, private fus: FormUtilityService,
    private agenciesApi: AgenciesApi, private tripsApi:TripsApi) {
      super(fms);
      // agenciesApi.getAll$().subscribe( (data) => {
      //   this.agencies = data;
      // });
    this.form = formBuilder.group(
      {
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        agencyId: new FormControl('', [Validators.required]),
        places: new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        flightPrice: new FormControl('', [
          Validators.required,
          Validators.min(1000000),
          Validators.max(10000000),
        ]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
      },
      {
        validators: [fvs.dateControl],
      }
    );
  }

  private getDashIdTrip(destino: string, id: string): string {
    return this.fus.getDashIdTrip(destino,id);
  }

  getDateMessage() {
    const errors = this.form.errors;
    if (!errors) {
      return '';
    }
    if (errors['dateControl']) {
      return errors['dateControl'];
    }
    return '';
  }

  onSave() {
    const { destination, agencyId, places, flightPrice, startDate, endDate } =
      this.form.value;
    const id = this.getDashIdTrip(destination, agencyId);
    const newTripData = {
      id,
      destination,
      agencyId,
      places,
      flightPrice,
      startDate,
      endDate,
    };
    console.warn('Send trip data ', newTripData);
    // this.tripsApi.post(newTripData);
    this.save.emit(newTripData);
  }
  ngOnInit(): void {}
}
