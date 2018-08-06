import { AnyAppFormControl } from "./form-control";
import { Injector } from "@angular/core";
import { AnyAppErrorStateMatcher } from "./error-state-matcher";
export declare abstract class AnyAppModelControl extends AnyAppFormControl {
    private _innerValue;
    matcher: AnyAppErrorStateMatcher;
    constructor(_injector: Injector);
    innerValue: any;
    onModelChange(event: any): void;
    writeValue(value: any): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}
