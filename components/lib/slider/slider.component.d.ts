import { OnInit, Injector } from '@angular/core';
import { AnyAppModelControl } from '../model-control';
export declare class SliderComponent extends AnyAppModelControl implements OnInit {
    label: string;
    hint: string;
    min: number;
    max: number;
    step: number;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
