import { OnInit, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { AnyAppMenuItem } from '../components.model';
export declare class TopMenuComponent extends AnyAppBaseControl implements OnInit {
    sideNavRef: any;
    title: string;
    menu: AnyAppMenuItem[];
    showFace: boolean;
    showNotification: boolean;
    constructor(_injector: Injector);
    ngOnInit(): void;
    notificationItemClick(): void;
    faceItemClick(): void;
    menuItemClick(menuItem: AnyAppMenuItem): void;
}
