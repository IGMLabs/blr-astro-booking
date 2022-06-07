import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {

  form: FormGroup ;


  constructor(formBuilder: FormBuilder, public fms: FormMessagesService) {
    this.form = formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email], ),
      password: new FormControl('', [Validators.required], ),
    });
   }

  ngOnInit(): void {
  }

  onSave(){
    const {email, password} = this.form.value;
    const register = {email, password};
    console.log('Send Login', register);
  }

  getErrorMessage(controlName:string):string{
    return this.fms.getErrorMessage(this.form, controlName);
  }

  hasError(controlName: string): boolean{
    return this.fms.hasError(this.form, controlName);
  }

  mustShowMessage (controlName:string): boolean{
    return this.fms.mustShowMessage(this.form, controlName);
  }


}
