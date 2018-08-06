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

  hasRequiredField: boolean;

  constructor(_injector: Injector) {
    super(_injector);
  }

  initializeForm() {
    if (this.formControlName) { // name = set
      if (this.formControl == null) { // fc is not set
        if (this.form && this.form.form) { // find control and set
          this.formControl = this.form.form.controls[this.formControlName] as FormControl;
        }
      }
    }

    if(this.formControl) {
      this.hasRequiredField = hasRequiredField(this.formControl);
    }
  }
}