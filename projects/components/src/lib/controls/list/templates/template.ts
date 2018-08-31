import { Component, OnInit, Input, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, OnDestroy, Type } from '@angular/core';
import { AnyAppListContentTemplate } from './content.template';

// @Component({
//     selector: 'aa-template',
//     template: `<ng-container #container></ng-container>`,
//     styles: ['']
// })
export abstract class AnyAppListTemplate { // or: implements IButtonComponent
    @Input() item: any;
    @Input() template: Type<any>;// = AnyAppListContentTemplate;
    @Input() context: any;

    componentRef: ComponentRef<any>;
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    renderTemplate() {
        // if(this.template == null) {
        //     this.template = AnyAppListContentTemplate;
        // }
        
        if(this.template) {
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.template);
            this.componentRef = this.container.createComponent(factory, 0, undefined);
            this.componentRef.instance.item = this.item;
        }
    }

    destroyTemplate() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}