import { Component, OnInit, Input, Renderer2, ElementRef, Injector } from '@angular/core';

@Component({
    selector: 'aa-custom-template',
    template: `<div>customcustomcustomcustom {{item | json}}</div>`,
    styles: ['']
})
export class CustomTemplate { // or: implements IButtonComponent
    @Input() item: any;

    constructor(_injector: Injector) {
    }
}