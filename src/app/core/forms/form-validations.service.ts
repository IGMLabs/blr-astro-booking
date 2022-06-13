import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }


  passwordMatch(form: AbstractControl): ValidationErrors | null{

    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if(!password || !confirmPassword) {
      return {
        passwordMatch: 'No passwords recived',
      };
    }
    if(password.value !== confirmPassword.value) {
      return {
        passwordMatch: 'Passwords dont match',
      };
    }

    return null;
   }

   dateControl(form: AbstractControl): ValidationErrors | null {
    const dateForm = form.get('startDate');
    const dateTo = form.get('endDate');

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

  dateControlBookings(control: AbstractControl): ValidationErrors | null {
    const date = control.value;
    const dateTo = new Date();
    if (!date) {
      return {
        dateControl: 'Dates dont exist',
      };
    }
    const dateDate= new Date(date);
    if (dateDate < dateTo) {
      return {
        dateControl: 'Dates wrong',
      };
    }
    return null;
  }



}
