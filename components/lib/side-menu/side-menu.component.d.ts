import { OnInit, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { AnyAppEventModel, AnyAppTreeModel } from '../components.model';
export declare class SideMenuComponent extends AnyAppBaseControl implements OnInit {
    items: AnyAppTreeModel[];
    level: number;
    constructor(_injector: Injector);
    ngOnInit(): void;
    onItemClick(model: AnyAppEventModel<AnyAppTreeModel>): void;
}
