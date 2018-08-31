import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit } from '@angular/core';
import { AnyAppListTemplate } from './template';

@Component({
    selector: 'aa-footer-template',
    template: `<ng-container #container></ng-container>`,
    styles: ['']
})
export class AnyAppListFooterTemplate extends AnyAppListTemplate implements OnInit, OnDestroy { // or: implements IButtonComponent
    @Input() buttons: any[];

    constructor(componentFactoryResolver: ComponentFactoryResolver) {
        super(componentFactoryResolver)
    }

    ngOnInit() {
        this.renderTemplate();
        this.componentRef.instance.buttons = this.buttons;
    }

    ngOnDestroy() {
        this.destroyTemplate();
    }
}