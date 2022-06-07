import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormMessagesService {

  constructor() { }


  public hasError(form:FormGroup, controlName: string): boolean {
    const control = this.getControl(form, controlName);
    if (!control) return false;
    return control.invalid;
  }

  private getControl(form:FormGroup,controlName: string): AbstractControl | null {
    return form.get(controlName);
  }


  public mustShowMessage(form:FormGroup, controlName: string): boolean {
    const control = this.getControl(form ,controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(form:FormGroup,controlName: string): string {
    const control = this.getControl(form, controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : ' ';
    errorMessage += errors['min']
      ? `🔥 Field needs more ${errors['min'].min} `
      : ' ';
    errorMessage += errors['max']
      ? `🔥 Field needs less ${errors['max'].max}`
      : ' ';
      errorMessage += errors['email']? ' 💢 Field must be an email' : '';
      errorMessage += errors['maxlength']? ` 💢 Field needs less than ${errors['maxlength'].requiredLength} chars` : '';
    return errorMessage;
  }

  getPasswordMatchMessage(form:FormGroup){
    const errors = form.errors;
    if(!errors){return ''};
    if(errors['passwordMatch']){return errors ['passwordMatch']};
    return '';
  }


}
