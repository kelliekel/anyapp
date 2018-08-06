import { OnInit, Injector } from '@angular/core';
import { AnyAppTreeModel } from '../../components.model';
import { AnyAppBaseControl } from '../../base-control';
export declare class SideMenuItemComponent extends AnyAppBaseControl implements OnInit {
    item: AnyAppTreeModel;
    level: number;
    constructor(_inject: Injector);
    ngOnInit(): void;
    clickMenuItem(): void;
}
