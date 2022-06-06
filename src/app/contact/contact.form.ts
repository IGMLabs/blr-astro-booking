import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface Contact {
  name:string;
  email:string;
  message:string;
}



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css']
})
export class ContactForm implements OnInit {

  form: FormGroup ;


  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)], ),
      email: new FormControl('', [Validators.required, Validators.email], ),
      message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)], ),

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

  hasError(controlName: string){
    const control = this.getControl(controlName);
    if(!control){return false;}
    return control.invalid;
  }

  mustShowMessage (controlName:string){
    const control = this.getControl(controlName);
    if(!control){return false;}
    return control.touched && control.invalid;
  }

}
