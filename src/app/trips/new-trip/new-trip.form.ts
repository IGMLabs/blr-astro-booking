import { Component, OnInit } from '@angular/core';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css'],
})
export class NewTripForm implements OnInit {
  autoN = 5;
  public form: FormGroup;
  public agencies = [
    { id: 'space-y', name: '🌌 To the Space Y' },
    {
      id: 'green-origin',
      name: '🥗 To Green Origin',
    },
    {
      id: 'vingin-way',
      name: '🛒 To Virgin Way',
    },
  ];
  public statuses = ['Confirmed', 'Waiting'];


  constructor(formBuilder: FormBuilder, fvs: FormValidationsService
    ,public fms : FormMessagesService, public fus: FormUtilityService) {
    this.form = formBuilder.group(
      {
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        agencyId: new FormControl('', [Validators.required]),
        plazas: new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        precio: new FormControl('', [
          Validators.required,
          Validators.min(1000000),
          Validators.max(10000000),
        ]),
        dateFrom: new FormControl('', [Validators.required]),
        dateTo: new FormControl('', [Validators.required]),
      },
      {
        validators: [fvs.dateControl],
      }
    );
  }


  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  public hasError( controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
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
    const { destination, agencyId, plazas, precio, dateFrom, dateTo } =
      this.form.value;
    const id = this.getDashIdTrip(destination, agencyId);
    const newTripData = {
      id,
      destination,
      agencyId,
      plazas,
      precio,
      dateFrom,
      dateTo,
    };
    console.warn('Send trip data ', newTripData);
  }
  ngOnInit(): void {}
}
