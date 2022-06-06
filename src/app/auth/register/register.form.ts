import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    });
   }

  ngOnInit(): void {
  }

  onSave(){
    const contact = this.form.value;
    console.log(contact);
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
