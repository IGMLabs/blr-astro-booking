import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMessagesService } from '../core/forms/form-messages.service';


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


  constructor(formBuilder: FormBuilder,
    public fms: FormMessagesService) {
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

  getErrorMessage(controlName:string):string{
    return this.fms.getErrorMessage(this.form, controlName);
  }

  hasError(controlName: string){
    return this.fms.hasError(this.form, controlName);
  }

  mustShowMessage (controlName:string){
    return this.fms.mustShowMessage(this.form, controlName);
  }

}
