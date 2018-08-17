import { Input, Injector } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { AnyAppComponentsConfig, ANYAPP_COMPONENTS_CONFIG } from "./components.config";
import { AnyAppBaseControl } from "./base-control";
import { hasRequiredField } from "./util";

export abstract class AnyAppFormControl extends AnyAppBaseControl {
  @Input() form: NgForm; // form contains formgroup
  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() tooltip: string = null;

  hasRequiredField: boolean;

  constructor(_injector: Injector) {
    super(_injector);
  }

  initializeForm() {
    // we need to set formcontrol if it's not provided
    // if we pass in ngform we need to do a deep-search because the form may contain multiple inner formgroups
    // if we pass in a formgroup it's more easy; but we need to change the button component as it expects a form
    if (!this.formControl) {
      if (this.formControlName && this.form && this.form.form) { // name = set
        this.formControl = this.form.form.controls[this.formControlName] as FormControl;
      }
    }

    // still null?
    if(!this.formControl) {
      // this will cause an error with reactive forms
      // for now: fake a formcontrol which wont be bound to the users form or formgroup
      this.formControl = new FormControl();
    }

    if (this.formControl) {
      this.hasRequiredField = hasRequiredField(this.formControl);
    }
  }
}