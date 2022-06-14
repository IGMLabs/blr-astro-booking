import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBase } from '../../../core/forms/form.base';
import { FormMessagesService } from '../../../core/forms/form-messages.service';
import { FormGroup, FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-control',
  templateUrl: './email.control.html',
  styleUrls: ['./email.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> EmailControl),
      multi: true,
    },
  ]
})
export class EmailControl extends FormBase implements OnInit, ControlValueAccessor {

  touchedCallback:any;
  formControlName:string ='email';
  constructor(fms: FormMessagesService) {
    super(fms);
    this.form =  new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], ),
    });
   }

  writeValue(value: any): void {
  //  super.form.get('email')?.setValue(value);
   this.form.setValue({email:value}, {emitEvent: false});
  }
  registerOnChange(changeCallback: any): void {
    this.form.valueChanges.subscribe(changeCallback);
  }
  registerOnTouched(touchedCallback: any): void {
   this.touchedCallback = touchedCallback;
  }

  ngOnInit(): void {
  }

}
