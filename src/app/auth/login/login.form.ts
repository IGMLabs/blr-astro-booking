import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormBase } from '../../core/forms/form.base';
import { Login } from '../api/login.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm extends FormBase implements OnInit {

  @Output() login = new EventEmitter<Login>();

  constructor(formBuilder: FormBuilder,  fms: FormMessagesService) {
    super(fms);
    this.form = formBuilder.group({
      email: new FormControl('', [], ),
      password: new FormControl('', [Validators.required], ),
    });
   }

  ngOnInit(): void {
  }

  onSave(){
    const {email, password} = this.form.value;
    const login = {email: email.email, password};
    console.log('Send Login', login);
    this.login.emit(login);
  }

}
