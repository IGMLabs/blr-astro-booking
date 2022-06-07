import { Component, OnInit } from '@angular/core';
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

  constructor(formBuilder: FormBuilder) {
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
        validators: [this.dateControl],
      }
    );
  }
  public hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : ' ';
    errorMessage += errors['min']
      ? `🔥 Field needs more ${errors['min'].min} `
      : ' ';
    errorMessage += errors['max']
      ? `🔥 Field needs less ${errors['max'].max}`
      : ' ';
    return errorMessage;
  }

  dateControl(form: AbstractControl): ValidationErrors | null {
    const dateForm = form.get('dateFrom');
    const dateTo = form.get('dateTo');

    if (!dateForm || !dateTo) {
      return {
        dateControl: 'Dates dont exist',
      };
    }
    if (dateForm.value > dateTo.value) {
      return {
        dateControl: 'Dates wrong',
      };
    }
    return null;
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  private getDashId(destino: string, id: string): string {
    const str = destino + ' ' + id + ' ' + this.nextnumber();
    return str.toLocaleLowerCase().replace(/ /g, '-');
  }
  private nextnumber() {
    return this.autoN++;
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
    const id = this.getDashId(destination, agencyId);
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
