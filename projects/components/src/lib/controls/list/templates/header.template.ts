import { Component, ComponentFactoryResolver, Input, OnInit, OnDestroy } from '@angular/core';
import { AnyAppListTemplate } from './template';

@Component({
    selector: 'aa-header-template',
    template: `<ng-container #container></ng-container>`,
    styles: ['']
})
export class AnyAppListHeaderTemplate extends AnyAppListTemplate implements OnInit, OnDestroy { // or: implements IButtonComponent
    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        super(componentFactoryResolver)
    }

    ngOnInit() {
        this.renderTemplate();
    }

    ngOnDestroy() {
        this.destroyTemplate();
    }
}