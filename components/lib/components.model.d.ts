export declare class AnyAppEventModel<T = {}> {
    key: AnyAppEventKeys;
    value?: T;
    constructor(key: AnyAppEventKeys, value?: T);
}
export declare class AnyAppMenuItem {
    text: string;
    key: string;
}
export declare class AnyAppTreeModel {
    text: string;
    children: AnyAppTreeModel[];
    Id: number;
    expanded?: boolean;
    navigateUrl?: string;
    constructor(id: number, text: string, children?: AnyAppTreeModel[], expanded?: boolean, navigateUrl?: string);
    toggle(): void;
}
export declare enum AnyAppEventKeys {
    MESSAGE_CLICK = 1,
    MENU_ITEM_CLICK = 2,
    MENU_FACE_CLICK = 3,
    MENU_NOTIFICATION_CLICK = 4,
}
