import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AnyAppControl } from '../../fields/field/field-control';

@Injectable({
	providedIn: 'root'
})
export class DynamicFormService {
	constructor(
    private _fb: FormBuilder) {
	}

	public addControl(group: FormGroup, control: AnyAppControl) {
		if (group && control) {
			if (!group.controls[control.name]) {
				group.controls[control.name] = this._addControl(group, control);
			}
		}
	}

	public removeControl(group: FormGroup, control: AnyAppControl) {
		if (group && control) {
			if (group.controls[control.name]) {
				group.controls[control.name] = null;
			}
		}
	}

	public createForm(dbForm: AnyAppControl[]) {
		if (dbForm) {
			let group: any = {};

			dbForm.forEach(x => {
				group[x.name] = this._addControl(group, x);
			});

			return this._fb.group(group);
		}
	}

	private _addControl(group: any, control: AnyAppControl) {
		let fc = new FormControl(control.value || '');

		if (control.properties) {
			this._setValidator(fc, control.properties, 'required');
			this._setValidator(fc, control.properties, 'requiredTrue');
			//this._setValidator(fc, control.properties, 'min');
			//this._setValidator(fc, control.properties, 'minLength');
			//this._setValidator(fc, control.properties, 'max');
			//this._setValidator(fc, control.properties, 'maxLength');
			//this._setValidator(fc, control.properties, 'pattern');
			//this._setValidator(fc, control.properties, 'email');
		}

		// apply childs-groups
		if (control.childs && control.childs.length > 0) {
			group["group_" + control.name] = this.createForm(control.childs);
		}

		// apply control to group
		//group[control.name] = fc;
		return fc; // creating or adding works differently
	}

	private _setValidator(fc: FormControl, properties: any, validator: string) {
		if (validator in properties && properties[validator] == true) {
			fc.setValidators(Validators[validator]);
		}
	}
}