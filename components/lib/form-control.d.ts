import { Injector } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { AnyAppBaseControl } from "./base-control";
export declare abstract class AnyAppFormControl extends AnyAppBaseControl {
    form: NgForm;
    formControlName: string;
    formControl: FormControl;
    disabled: boolean;
    hasRequiredField: boolean;
    constructor(_injector: Injector);
    initializeForm(): void;
}
