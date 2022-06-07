import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm implements OnInit {

  form: FormGroup ;


  constructor(formBuilder: FormBuilder) {
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

  getControl(controlName : string):AbstractControl | null{
    return this.form.get(controlName);
  }

  getErrorMessage(controlName:string):string{
    const control = this.getControl(controlName);
    if(!control){return '';}
    if(!control.errors){return '';}
    const errors = control.errors;
    let errorMessage ='';
    errorMessage += errors['required']? ' 💢 Field is required' : '';
    return errorMessage;
  }

  hasError(controlName: string): boolean{
    const control = this.getControl(controlName);
    if(!control){return false;}
    return control.invalid;
  }

  mustShowMessage (controlName:string): boolean{
    const control = this.getControl(controlName);
    if(!control){return false;}
    return control.touched && control.invalid;
  }


}
