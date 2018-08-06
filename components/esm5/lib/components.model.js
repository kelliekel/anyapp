/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
AnyAppEventModel = /** @class */ (function () {
    function AnyAppEventModel(key, value) {
        this.key = key;
        this.value = value;
    }
    return AnyAppEventModel;
}());
/**
 * @template T
 */
export { AnyAppEventModel };
if (false) {
    /** @type {?} */
    AnyAppEventModel.prototype.key;
    /** @type {?} */
    AnyAppEventModel.prototype.value;
}
var AnyAppMenuItem = /** @class */ (function () {
    function AnyAppMenuItem() {
    }
    return AnyAppMenuItem;
}());
export { AnyAppMenuItem };
if (false) {
    /** @type {?} */
    AnyAppMenuItem.prototype.text;
    /** @type {?} */
    AnyAppMenuItem.prototype.key;
}
var AnyAppTreeModel = /** @class */ (function () {
    function AnyAppTreeModel(id, text, children, expanded, navigateUrl) {
        this.text = text;
        this.children = children;
        this.Id = id;
        this.expanded = expanded;
        this.navigateUrl = navigateUrl;
    }
    /**
     * @return {?}
     */
    AnyAppTreeModel.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.expanded = !this.expanded;
    };
    return AnyAppTreeModel;
}());
export { AnyAppTreeModel };
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
var AnyAppEventKeys = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnlhcHAvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQUE7SUFJQywwQkFBWSxHQUFvQixFQUFFLEtBQVM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjsyQkFQRjtJQVFDLENBQUE7Ozs7QUFSRCw0QkFRQzs7Ozs7OztBQUVELElBQUE7Ozt5QkFWQTtJQWFDLENBQUE7QUFIRCwwQkFHQzs7Ozs7OztBQUVELElBQUE7SUFPSSx5QkFBWSxFQUFVLEVBQUUsSUFBWSxFQUFFLFFBQTRCLEVBQUUsUUFBa0IsRUFBRSxXQUFvQjtRQUN4RyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDOzs7O0lBRUQsZ0NBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDbEM7MEJBaENMO0lBaUNDLENBQUE7QUFsQkQsMkJBa0JDOzs7Ozs7Ozs7Ozs7Ozs7SUFHQSxnQkFBaUI7SUFDakIsa0JBQW1CO0lBQ25CLGtCQUFtQjtJQUNuQiwwQkFBMkI7OztnQ0FIM0IsYUFBYTtnQ0FDYixlQUFlO2dDQUNmLGVBQWU7Z0NBQ2YsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFueUFwcEV2ZW50TW9kZWw8VCA9IHt9PiB7XHJcblx0a2V5OiBBbnlBcHBFdmVudEtleXM7XHJcblx0dmFsdWU/OiBUO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihrZXk6IEFueUFwcEV2ZW50S2V5cywgdmFsdWU/OiBUKSB7XHJcblx0XHR0aGlzLmtleSA9IGtleTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbnlBcHBNZW51SXRlbSB7XHJcblx0dGV4dDogc3RyaW5nO1xyXG5cdGtleTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW55QXBwVHJlZU1vZGVsIHtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2hpbGRyZW46IEFueUFwcFRyZWVNb2RlbFtdO1xyXG4gICAgcHVibGljIElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZXhwYW5kZWQ/OmJvb2xlYW47XHJcbiAgICBwdWJsaWMgbmF2aWdhdGVVcmw/OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHQ6IHN0cmluZywgY2hpbGRyZW4/OiBBbnlBcHBUcmVlTW9kZWxbXSwgZXhwYW5kZWQ/OiBib29sZWFuLCBuYXZpZ2F0ZVVybD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG4gICAgICAgIHRoaXMuSWQgPSBpZDtcclxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVVybCA9IG5hdmlnYXRlVXJsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0b2dnbGUoKXtcclxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFueUFwcEV2ZW50S2V5cyB7XHJcblx0TUVTU0FHRV9DTElDSyA9IDEsXHJcblx0TUVOVV9JVEVNX0NMSUNLID0gMixcclxuXHRNRU5VX0ZBQ0VfQ0xJQ0sgPSAzLFxyXG5cdE1FTlVfTk9USUZJQ0FUSU9OX0NMSUNLID0gNCxcclxufSJdfQ==