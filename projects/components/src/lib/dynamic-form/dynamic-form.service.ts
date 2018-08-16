import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AnyAppDynamicControl } from './dynamic-control';

@Injectable({
	providedIn: 'root'
})
export class DynamicFormService {
	constructor() {
	}

	public createForm(fb: FormBuilder, dbForm: AnyAppDynamicControl[]) {
		if (dbForm) {
			let group: any = {};

			dbForm.forEach(x => {
				//if(!x.formControls) {
				let fc = new FormControl(x.value || '');

				if (x.required)
					fc.setValidators(Validators.required);
				// todo: extend validators

				group[x.name] = fc;
				//}
				//else {

				// has childs
				if (x.formControls && x.formControls.length > 0) {
					group["group_" + x.name] = this.createForm(fb, x.formControls);
				}

				//}
			});

			return fb.group(group);
		}
	}
}