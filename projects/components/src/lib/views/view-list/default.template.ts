import { Component, OnInit, Input, Renderer2, ElementRef, Injector } from '@angular/core';

@Component({
    selector: 'aa-default-template',
    template: `<div>{{item | json}}</div>`,
    styles: ['']
})
export class DefaultTemplate { // or: implements IButtonComponent
    @Input() item: any;

    constructor(_injector: Injector) {
    }
}