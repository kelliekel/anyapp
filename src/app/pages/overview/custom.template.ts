import { Component, OnInit, Input, Renderer2, ElementRef, Injector } from '@angular/core';

@Component({
    selector: 'aa-custom-template',
    template: `<div>Dit is een custom template <br /> {{item | json}}</div>`,
    styles: ['']
})
export class CustomTemplate { // or: implements IButtonComponent
    @Input() item: any;

    constructor(_injector: Injector) {
    }
}

@Component({
    selector: 'aa-custom-template2',
    template: `<div>En dit is een ander template {{item.title}}</div>`,
    styles: ['']
})
export class CustomTemplate2 { // or: implements IButtonComponent
    @Input() item: any;

    constructor(_injector: Injector) {
    }
}