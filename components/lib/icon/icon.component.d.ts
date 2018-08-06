import { OnInit, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
export declare class IconComponent extends AnyAppFormControl implements OnInit {
    icon: string;
    color: string;
    inline: boolean;
    constructor(_injector: Injector);
    ngOnInit(): void;
}
