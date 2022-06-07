import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {
  form: FormGroup ;


  constructor(formBuilder: FormBuilder, fvs: FormValidationsService,
     public fms: FormMessagesService) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)], ),
      email: new FormControl('', [Validators.required, Validators.email], ),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ),
      acceptTerms: new FormControl(false, [Validators.requiredTrue], ),
    },{
      validators: [fvs.passwordMatch],
    });
   }

  ngOnInit(): void {
  }

  onSave(){
    const {name, email, password} = this.form.value;
    const register = {name, email, password};
    console.log('Send register', register);
  }


  getErrorMessage(controlName:string):string{
    return this.fms.getErrorMessage(this.form, controlName);
  }

  getPasswordMatchMessage(){
    return this.fms.getPasswordMatchMessage(this.form);
  }
  hasError(controlName: string): boolean{
    return this.fms.hasError(this.form, controlName);
  }

  mustShowMessage (controlName:string): boolean{
    return this.fms.mustShowMessage(this.form, controlName);
  }

}
