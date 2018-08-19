import { ErrorStateMatcher } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

export class AnyAppErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    var returnVal = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return returnVal;
  }
}