import { Component, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { AnyAppListTemplate } from './template';

@Component({
    selector: 'aa-content-template',
    template: `<ng-container #container></ng-container>`,
    styles: ['']
})
export class AnyAppListContentTemplate extends AnyAppListTemplate implements OnInit, OnDestroy { // or: implements IButtonComponent
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