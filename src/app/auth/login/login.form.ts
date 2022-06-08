import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormBase } from '../../core/forms/form.base';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm extends FormBase implements OnInit {



  constructor(formBuilder: FormBuilder,  fms: FormMessagesService) {
    super(fms);
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

}
