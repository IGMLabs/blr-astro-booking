import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormBase } from '../../../core/forms/form.base';
import { FormMessagesService } from '../../../core/forms/form-messages.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-control',
  templateUrl: './template.control.html',
  styleUrls: ['./template.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> TemplateControl),
      multi: true,
    },
  ]
})
export class TemplateControl implements OnInit, ControlValueAccessor {

  @Input() formControlName:string ='';
  @Input() inputType:string ='text';
  @Input() label:string ='Enter data';
  @Input() placeHolder:string ='...';
  @Input() form!:FormGroup;

  touchedCallback:any;
  changeCallback:any;
  value:any;

  constructor(private fms: FormMessagesService) {

  }

  onKeyUp(event : any){
    const controlValue = event.target.value;
    this.value= controlValue;
    this.changeCallback(this.value);
    this.touchedCallback();
  }


 writeValue(value: any): void {
   this.value = value;
  }
  registerOnChange(changeCallback: any): void {
    this.changeCallback = changeCallback;
  }
  registerOnTouched(touchedCallback: any): void {
   this.touchedCallback = touchedCallback;
  }

  ngOnInit(): void {
  }
  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }


}
