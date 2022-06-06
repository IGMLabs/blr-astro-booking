import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm implements OnInit {
  form: FormGroup ;


  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)], ),
      email: new FormControl('', [Validators.required, Validators.email], ),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ),
      acceptTerms: new FormControl(false, [Validators.requiredTrue], ),
    },{
      validators: [this.passwordMatch],
    });
   }


   private passwordMatch(form: AbstractControl): ValidationErrors | null{

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




  ngOnInit(): void {
  }

  onSave(){
    const {name, email, password} = this.form.value;
    const register = {name, email, password};
    console.log('Send register', register);
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
    errorMessage += errors['email']? ' 💢 Field must be an email' : '';
    errorMessage += errors['minlength']? ` 💢 Field needs more than ${errors['minlength'].requiredLength} chars` : '';
    errorMessage += errors['maxlength']? ` 💢 Field needs less than ${errors['maxlength'].requiredLength} chars` : '';
    return errorMessage;
  }

  getPasswordMatchMessage(){
    const errors = this.form.errors;
    if(!errors){return ''};
    if(errors['passwordMatch']){return errors ['passwordMatch']};
    return '';
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
