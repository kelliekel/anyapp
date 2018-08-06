/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class AnyAppEventModel {
    /**
     * @param {?} key
     * @param {?=} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    AnyAppEventModel.prototype.key;
    /** @type {?} */
    AnyAppEventModel.prototype.value;
}
export class AnyAppMenuItem {
}
if (false) {
    /** @type {?} */
    AnyAppMenuItem.prototype.text;
    /** @type {?} */
    AnyAppMenuItem.prototype.key;
}
export class AnyAppTreeModel {
    /**
     * @param {?} id
     * @param {?} text
     * @param {?=} children
     * @param {?=} expanded
     * @param {?=} navigateUrl
     */
    constructor(id, text, children, expanded, navigateUrl) {
        this.text = text;
        this.children = children;
        this.Id = id;
        this.expanded = expanded;
        this.navigateUrl = navigateUrl;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
}
if (false) {
    /** @type {?} */
    AnyAppTreeModel.prototype.text;
    /** @type {?} */
    AnyAppTreeModel.prototype.children;
    /** @type {?} */
    AnyAppTreeModel.prototype.Id;
    /** @type {?} */
    AnyAppTreeModel.prototype.expanded;
    /** @type {?} */
    AnyAppTreeModel.prototype.navigateUrl;
}
/** @enum {number} */
const AnyAppEventKeys = {
    MESSAGE_CLICK: 1,
    MENU_ITEM_CLICK: 2,
    MENU_FACE_CLICK: 3,
    MENU_NOTIFICATION_CLICK: 4,
};
export { AnyAppEventKeys };
AnyAppEventKeys[AnyAppEventKeys.MESSAGE_CLICK] = 'MESSAGE_CLICK';
AnyAppEventKeys[AnyAppEventKeys.MENU_ITEM_CLICK] = 'MENU_ITEM_CLICK';
AnyAppEventKeys[AnyAppEventKeys.MENU_FACE_CLICK] = 'MENU_FACE_CLICK';
AnyAppEventKeys[AnyAppEventKeys.MENU_NOTIFICATION_CLICK] = 'MENU_NOTIFICATION_CLICK';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNOzs7OztJQUlMLFlBQVksR0FBb0IsRUFBRSxLQUFTO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDbkI7Q0FDRDs7Ozs7OztBQUVELE1BQU07Q0FHTDs7Ozs7OztBQUVELE1BQU07Ozs7Ozs7O0lBT0YsWUFBWSxFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQTRCLEVBQUUsUUFBa0IsRUFBRSxXQUFvQjtRQUN4RyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ2xDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7OztJQUdBLGdCQUFpQjtJQUNqQixrQkFBbUI7SUFDbkIsa0JBQW1CO0lBQ25CLDBCQUEyQjs7O2dDQUgzQixhQUFhO2dDQUNiLGVBQWU7Z0NBQ2YsZUFBZTtnQ0FDZix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW55QXBwRXZlbnRNb2RlbDxUID0ge30+IHtcclxuXHRrZXk6IEFueUFwcEV2ZW50S2V5cztcclxuXHR2YWx1ZT86IFQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGtleTogQW55QXBwRXZlbnRLZXlzLCB2YWx1ZT86IFQpIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFueUFwcE1lbnVJdGVtIHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0a2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbnlBcHBUcmVlTW9kZWwge1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGlsZHJlbjogQW55QXBwVHJlZU1vZGVsW107XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBleHBhbmRlZD86Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVybD86IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjaGlsZHJlbj86IEFueUFwcFRyZWVNb2RlbFtdLCBleHBhbmRlZD86IGJvb2xlYW4sIG5hdmlnYXRlVXJsPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVXJsID0gbmF2aWdhdGVVcmw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQW55QXBwRXZlbnRLZXlzIHtcclxuXHRNRVNTQUdFX0NMSUNLID0gMSxcclxuXHRNRU5VX0lURU1fQ0xJQ0sgPSAyLFxyXG5cdE1FTlVfRkFDRV9DTElDSyA9IDMsXHJcblx0TUVOVV9OT1RJRklDQVRJT05fQ0xJQ0sgPSA0LFxyXG59Il19