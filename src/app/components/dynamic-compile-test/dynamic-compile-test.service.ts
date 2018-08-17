import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable, Component, NgModule } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DynamicCompileTestService {
	constructor() {
    }
    
    foo() {
        return "BARRRR";
    }
}

export function CustomComponent(annotation: any) {
    return function (target: Function) {
        const component = new Component(annotation);
        Component(component)(target);

    };
}

export function CustomNgModule(annotation: any) {
    return function (target: Function) {
        const ngModule = new NgModule(annotation);
        NgModule(ngModule)(target);
    };
}