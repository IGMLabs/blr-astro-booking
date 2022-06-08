import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormMessagesService } from '../../core/forms/form-messages.service';
import { FormUtilityService } from '../../core/forms/form-utility.service';
import { FormBase } from '../../core/forms/form.base';
import { IdName } from '../../core/api/id-name.inteface';
import { IdNameApi } from '../../core/api/id-name.api';
import { AgenciesApi } from '../../core/api/agencies.api';
import { Agency } from '../../core/api/agency.inteface';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  @Input() public ranges: IdName[]=[];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Agency>();

  constructor(formBuilder: FormBuilder, fms : FormMessagesService,
      private fus: FormUtilityService,) {
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
    this.save.emit(newAgencyData);
  }

  private getDashIdAgency(str: string): string {
    return this.fus.getDashIdAgency(str);
  }

  ngOnInit(): void {}
}
