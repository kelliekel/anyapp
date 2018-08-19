import { AnyAppFormControl } from "../form-control";
import { Injector, Input } from "@angular/core";
import { AnyAppErrorStateMatcher } from "./error-state-matcher";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AnyAppModelControl extends AnyAppFormControl implements ControlValueAccessor {
	private _innerValue: any = null;
	matcher: AnyAppErrorStateMatcher;

	// @Input() label: string;
	// @Input() hint: string;

	constructor(_injector: Injector) {
		super(_injector);
		this.matcher = new AnyAppErrorStateMatcher();
	}

	get innerValue() {
		return this._innerValue;
	}
	set innerValue(val) {
		this._innerValue = val;
		this.propagateChange(this._innerValue);
	}
	
	onModelChange(event) {
		//if (this._innerValue != event) {
			this.innerValue = event; // update only if changed
		//}
	}

	// gets called when the form is initialized (write to view)
	writeValue(value: any) {
		if (value !== undefined) {
			this._innerValue = value;
		}
	}

	// propagate the new value to the outside world
	propagateChange = (_: any) => { };

	// has access to a function that informs the outside world about changes
	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	// registers a callback that is excuted whenever a form control is “touched”
	registerOnTouched() { }
}