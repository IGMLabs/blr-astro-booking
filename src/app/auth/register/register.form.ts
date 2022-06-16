import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormBase } from '../../core/forms/form.base';
import { Register } from '../api/register.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {

  @Output() register = new EventEmitter<Register>();

  constructor(formBuilder: FormBuilder, fvs: FormValidationsService,
      fms: FormMessagesService) {
        super(fms);
    super.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)], ),
      email: new FormControl('', ),
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
    const register = {name, email : email.email, password};
    console.log('Send register', register);
    this.register.emit(register);
  }

  getPasswordMatchMessage(){
    const errors = this.form.errors;
    if(!errors){return ''};
    if(errors['passwordMatch']){return errors ['passwordMatch']};
    return '';
  }

}
