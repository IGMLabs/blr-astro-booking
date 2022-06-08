import { Component, OnInit } from '@angular/core';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormValidationsService } from '../../core/forms/form-validations.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormBase } from '../../core/forms/form.base';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  public ranges = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other planets',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  public statuses = ['Active', 'Pending'];

  constructor(formBuilder: FormBuilder, fms : FormMessagesService,
      private fus: FormUtilityService) {
        super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }


  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.getDashIdAgency(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
  }

  private getDashIdAgency(str: string): string {
    return this.fus.getDashIdAgency(str);
  }

  ngOnInit(): void {}
}
