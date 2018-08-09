export class AnyAppEventModel<T = {}> {
	key: AnyAppEventKeys;
	value?: T;

	constructor(key: AnyAppEventKeys, value?: T) {
		this.key = key;
		this.value = value;
	}
}

export class AnyAppMenuItem {
	text: string;
	key: string;
}

export enum AnyAppTreeType {
    Group = 1,
    Item = 2
}

export class AnyAppTreeModel {
    public key: string;
    public text: string;
    public type: AnyAppTreeType;
    public children: AnyAppTreeModel[];
    public isExpanded?:boolean;
    public navigateUrl?: string;
        
    constructor(key: string, text: string, type: AnyAppTreeType, children?: AnyAppTreeModel[], isExpanded?: boolean, navigateUrl?:string) {
        this.key = key;
        this.text = text;
        this.type = type;
        this.children = children;
        this.isExpanded = isExpanded;
        this.navigateUrl = navigateUrl;
    }
    
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}

export enum AnyAppEventKeys {
	MESSAGE_CLICK = 1,
	MENU_ITEM_CLICK = 2,
	MENU_FACE_CLICK = 3,
	MENU_NOTIFICATION_CLICK = 4,
}