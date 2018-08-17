import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AnyAppControl } from '../field/field-control';

@Injectable({
	providedIn: 'root'
})
export class DynamicFormService {
	constructor() {
	}

	public createForm(fb: FormBuilder, dbForm: AnyAppControl[]) {
		if (dbForm) {
			let group: any = {};

			dbForm.forEach(x => {
				//if(!x.formControls) {
				let fc = new FormControl(x.value || '');
				
				if(x.properties) {
					if('required' in x.properties && x.properties == true) {
						fc.setValidators(Validators.required);
					}
				}
				// todo: extend validators

				group[x.name] = fc;
				//}
				//else {

				// has childs
				if (x.childs && x.childs.length > 0) {
					group["group_" + x.name] = this.createForm(fb, x.childs);
				}

				//}
			});

			return fb.group(group);
		}
	}
}