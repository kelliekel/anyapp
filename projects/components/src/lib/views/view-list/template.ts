import { Component, OnInit, Input, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, OnDestroy, Type } from '@angular/core';
import { DefaultTemplate } from './default.template';

@Component({
    selector: 'aa-template',
    template: `<ng-container #container></ng-container>`,
    styles: ['']
})
export class AnyAppTemplateComponent implements OnInit, OnDestroy { // or: implements IButtonComponent
    @Input() item: any;
    @Input() template: Type<any> = DefaultTemplate;

    private componentRef: ComponentRef<any>;
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        if(this.template == null) {
            this.template = DefaultTemplate;
        }
        
        if(this.template) {
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.template);
            this.componentRef = this.container.createComponent(factory, 0, undefined);
            this.componentRef.instance.item = this.item;
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}