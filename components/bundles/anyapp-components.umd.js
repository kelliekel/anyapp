(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/material/snack-bar'), require('@angular/cdk/collections'), require('@angular/forms'), require('@angular/material-moment-adapter'), require('@angular/material/core'), require('moment'), require('@angular/common'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('@anyapp/components', ['exports', '@angular/core', '@angular/material', '@angular/material/snack-bar', '@angular/cdk/collections', '@angular/forms', '@angular/material-moment-adapter', '@angular/material/core', 'moment', '@angular/common', '@angular/platform-browser/animations'], factory) :
    (factory((global.anyapp = global.anyapp || {}, global.anyapp.components = {}),global.ng.core,global.ng.material,global.ng.material['snack-bar'],global.ng.cdk.collections,global.ng.forms,global.ng['material-moment-adapter'],global.ng.material.core,null,global.ng.common,global.ng.platformBrowser.animations));
}(this, (function (exports,i0,material,i2,collections,forms,materialMomentAdapter,core,_moment,common,animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ AnyAppEventModel = (function () {
        function AnyAppEventModel(key, value) {
            this.key = key;
            this.value = value;
        }
        return AnyAppEventModel;
    }());
    var AnyAppMenuItem = (function () {
        function AnyAppMenuItem() {
        }
        return AnyAppMenuItem;
    }());
    var AnyAppTreeModel = (function () {
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
    /** @enum {number} */
    var AnyAppEventKeys = {
        MESSAGE_CLICK: 1,
        MENU_ITEM_CLICK: 2,
        MENU_FACE_CLICK: 3,
        MENU_NOTIFICATION_CLICK: 4,
    };
    AnyAppEventKeys[AnyAppEventKeys.MESSAGE_CLICK] = 'MESSAGE_CLICK';
    AnyAppEventKeys[AnyAppEventKeys.MENU_ITEM_CLICK] = 'MENU_ITEM_CLICK';
    AnyAppEventKeys[AnyAppEventKeys.MENU_FACE_CLICK] = 'MENU_FACE_CLICK';
    AnyAppEventKeys[AnyAppEventKeys.MENU_NOTIFICATION_CLICK] = 'MENU_NOTIFICATION_CLICK';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ANYAPP_COMPONENTS_CONFIG = new i0.InjectionToken('anyapp-default-components-options');
    /** @enum {number} */
    var TableSelectEnum = {
        NoSelect: 0,
        SingleSelect: 1,
        MultiSelect: 2,
    };
    TableSelectEnum[TableSelectEnum.NoSelect] = 'NoSelect';
    TableSelectEnum[TableSelectEnum.SingleSelect] = 'SingleSelect';
    TableSelectEnum[TableSelectEnum.MultiSelect] = 'MultiSelect';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentsService = (function () {
        function ComponentsService(config, _snackbar) {
            this.config = config;
            this._snackbar = _snackbar;
        }
        /**
         * @param {?} message
         * @param {?} action
         * @return {?}
         */
        ComponentsService.prototype.showMessage = /**
         * @param {?} message
         * @param {?} action
         * @return {?}
         */
            function (message, action) {
                return this._snackbar.open(message, action, /** @type {?} */ ({
                    duration: this.config.messageDuration
                }));
            };
        ComponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        ComponentsService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] },
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ ComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(i0.inject(ANYAPP_COMPONENTS_CONFIG), i0.inject(i2.MatSnackBar)); }, token: ComponentsService, providedIn: "root" });
        return ComponentsService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var AnyAppBaseControl = (function () {
        function AnyAppBaseControl(_injector) {
            this._injector = _injector;
            this.onEvent = new i0.EventEmitter();
            this.config = _injector.get(ANYAPP_COMPONENTS_CONFIG);
            this.componentsService = _injector.get(ComponentsService);
        }
        AnyAppBaseControl.propDecorators = {
            onEvent: [{ type: i0.Output }]
        };
        return AnyAppBaseControl;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var hasRequiredField = function (abstractControl) {
        if (abstractControl.validator) {
            /** @type {?} */
            var validator = abstractControl.validator(/** @type {?} */ ({}));
            if (validator && validator["required"]) {
                return true;
            }
        }
        if (abstractControl['controls']) {
            for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (hasRequiredField(abstractControl['controls'][controlName])) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var AnyAppFormControl = (function (_super) {
        __extends(AnyAppFormControl, _super);
        function AnyAppFormControl(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.disabled = false;
            return _this;
        }
        /**
         * @return {?}
         */
        AnyAppFormControl.prototype.initializeForm = /**
         * @return {?}
         */
            function () {
                if (this.formControlName) {
                    // name = set
                    if (this.formControl == null) {
                        // fc is not set
                        if (this.form && this.form.form) {
                            // find control and set
                            this.formControl = /** @type {?} */ (this.form.form.controls[this.formControlName]);
                        }
                    }
                }
                if (this.formControl) {
                    this.hasRequiredField = hasRequiredField(this.formControl);
                }
            };
        AnyAppFormControl.propDecorators = {
            form: [{ type: i0.Input }],
            formControlName: [{ type: i0.Input }],
            formControl: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return AnyAppFormControl;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonComponent = (function (_super) {
        __extends(ButtonComponent, _super);
        function ButtonComponent(_injector, renderer, el) {
            var _this = _super.call(this, _injector) || this;
            _this.renderer = renderer;
            _this.el = el;
            _this.timeout = true;
            _this.type = 'button';
            _this.style = 'flat';
            _this.color = 'primary';
            return _this;
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ButtonComponent.prototype.submitAttachedForm = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.form != null && this.type == "button") {
                    // if form is set and type is button
                    this.form.onSubmit(event); // this will also update the submitted state
                    //this.form.ngSubmit.next(true);
                    //this.form.ngSubmit.emit(event);
                }
                // make sure a user can not click the button multiple times within a limited time
                this.handleButtonTimeoutTreshold();
            };
        /**
         * @return {?}
         */
        ButtonComponent.prototype.handleButtonTimeoutTreshold = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.timeout) {
                    setTimeout(function () {
                        _this.setDisabled(true);
                        setTimeout(function () { _this.setDisabled(null); }, _this.config.buttonConfig.buttonTimeoutThreshold);
                    }, 0);
                }
            };
        /**
         * @param {?} disabled
         * @return {?}
         */
        ButtonComponent.prototype.setDisabled = /**
         * @param {?} disabled
         * @return {?}
         */
            function (disabled) {
                if (disabled)
                    this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
                else
                    this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
            };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-button',
                        template: "<ng-container [ngSwitch]=\"style\">\n  <button id=\"button\" *ngSwitchCase=\"'raised'\" mat-raised-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'stroked'\" mat-stroked-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'flat'\" mat-flat-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'icon'\" mat-icon-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchCase=\"'fab'\" mat-fab [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n  <button id=\"button\" *ngSwitchDefault mat-button [type]=\"type\" [disabled]=\"disabled\" [color]=\"color\"><ng-container *ngTemplateOutlet=\"transclude\"></ng-container></button>\n</ng-container>\n\n<ng-template #transclude><ng-content></ng-content></ng-template>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        ButtonComponent.propDecorators = {
            timeout: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            style: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            submitAttachedForm: [{ type: i0.HostListener, args: ['click', ['$event'],] }]
        };
        return ButtonComponent;
    }(AnyAppFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TableComponent = (function (_super) {
        __extends(TableComponent, _super);
        function TableComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            //
            // Not mandatory
            //
            _this.allowSort = true;
            _this.allowPaging = true;
            _this.pageSize = 50;
            _this.allowSelect = false;
            _this.allowMultiSelect = false;
            return _this;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.dataSource = new material.MatTableDataSource(this.data);
                this.selection = new collections.SelectionModel(this.allowMultiSelect, []);
                if (this.allowPaging) {
                    this.paginator.pageSize = this.pageSize;
                    this.dataSource.paginator = this.paginator;
                }
                if (this.allowSort)
                    this.dataSource.sort = this.sort;
            };
        /** Whether the number of selected elements matches the total number of rows. */
        /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        TableComponent.prototype.isAllSelected = /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var numSelected = this.selection.selected.length;
                /** @type {?} */
                var numRows = this.dataSource.data.length;
                return numSelected == numRows;
            };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        TableComponent.prototype.masterToggle = /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
            function () {
                var _this = this;
                this.isAllSelected() ?
                    this.selection.clear() :
                    this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
            };
        TableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-table',
                        template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n  <ng-container *ngIf=\"allowSelect\" matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox *ngIf=\"allowMultiSelect\" (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[col]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\n</table>\n\n<mat-paginator showFirstLastButtons></mat-paginator>",
                        styles: ["table{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        TableComponent.propDecorators = {
            data: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            allowSort: [{ type: i0.Input }],
            allowPaging: [{ type: i0.Input }],
            pageSize: [{ type: i0.Input }],
            allowSelect: [{ type: i0.Input }],
            allowMultiSelect: [{ type: i0.Input }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }]
        };
        return TableComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AnyAppErrorStateMatcher = (function () {
        function AnyAppErrorStateMatcher() {
        }
        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        AnyAppErrorStateMatcher.prototype.isErrorState = /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
            function (control, form) {
                /** @type {?} */
                var isSubmitted = form && form.submitted;
                /** @type {?} */
                var returnVal = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
                return returnVal;
            };
        return AnyAppErrorStateMatcher;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ AnyAppModelControl = (function (_super) {
        __extends(AnyAppModelControl, _super);
        function AnyAppModelControl(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this._innerValue = null;
            // propagate the new value to the outside world
            _this.propagateChange = function (_) { };
            _this.matcher = new AnyAppErrorStateMatcher();
            return _this;
        }
        Object.defineProperty(AnyAppModelControl.prototype, "innerValue", {
            get: /**
             * @return {?}
             */ function () {
                return this._innerValue;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._innerValue = val;
                this.propagateChange(this._innerValue);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        AnyAppModelControl.prototype.onModelChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._innerValue != event) {
                    this.innerValue = event; // update only if changed
                }
            };
        // gets called when the form is initialized (write to view)
        /**
         * @param {?} value
         * @return {?}
         */
        AnyAppModelControl.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value !== undefined) {
                    this._innerValue = value;
                }
            };
        // has access to a function that informs the outside world about changes
        /**
         * @param {?} fn
         * @return {?}
         */
        AnyAppModelControl.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.propagateChange = fn;
            };
        // registers a callback that is excuted whenever a form control is “touched”
        /**
         * @return {?}
         */
        AnyAppModelControl.prototype.registerOnTouched = /**
         * @return {?}
         */
            function () { };
        return AnyAppModelControl;
    }(AnyAppFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputComponent = (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.type = "text";
            _this.maxLength = null;
            return _this;
        }
        /**
         * @return {?}
         */
        InputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        InputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-input',
                        template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <input matInput [placeholder]=\"placeholder\" #input [type]=\"type\" [(ngModel)]=\"innerValue\" \n    [errorStateMatcher]=\"matcher\" [disabled]=\"disabled\">\n\n  <mat-hint align=\"start\" *ngIf=\"hint\">{{hint}}</mat-hint>\n  <mat-hint align=\"end\" *ngIf=\"maxLength\">{{input.value.length}} / {{maxLength}}</mat-hint>\n\n  \n  <aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n\n</mat-form-field>\n<!--[formControl]=\"form?.controls[formControlName]\"-->",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                                useExisting: i0.forwardRef(function () { return InputComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        InputComponent.propDecorators = {
            label: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            maxLength: [{ type: i0.Input }]
        };
        return InputComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = (function (_super) {
        __extends(CheckboxComponent, _super);
        function CheckboxComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.labelPosition = 'after';
            _this.slideToggle = false;
            return _this;
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-checkbox',
                        template: "<mat-checkbox *ngIf=\"!slideToggle\" #input [(ngModel)]=\"innerValue\" [labelPosition]=\"labelPosition\">\n  <aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n</mat-checkbox>\n\n<mat-slide-toggle *ngIf=\"slideToggle\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\">\n  <aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n</mat-slide-toggle>\n\n<mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                                useExisting: i0.forwardRef(function () { return CheckboxComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        CheckboxComponent.propDecorators = {
            label: [{ type: i0.Input }],
            labelPosition: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            slideToggle: [{ type: i0.Input }]
        };
        return CheckboxComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectComponent = (function (_super) {
        __extends(SelectComponent, _super);
        function SelectComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.valueField = "id";
            _this.textField = "text";
            _this.multiple = false;
            return _this;
        }
        /**
         * @return {?}
         */
        SelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        SelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-select',
                        template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <mat-select *ngIf=\"!multiple\" [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\"\n    [errorStateMatcher]=\"matcher\">\n    <mat-option *ngIf=\"hasRequiredField == false\">Maak een keuze</mat-option>\n    <mat-option *ngFor=\"let item of items\" [value]=\"valueField != null ? item[valueField] : item\">{{textField != null ? item[textField] : item}}</mat-option>\n  </mat-select>\n  \n  <mat-select *ngIf=\"multiple\" multiple [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [disabled]=\"disabled\"\n    [errorStateMatcher]=\"matcher\">\n    <mat-option *ngIf=\"hasRequiredField == false\">Maak een keuze</mat-option>\n    <mat-option *ngFor=\"let item of items\" [value]=\"valueField != null ? item[valueField] : item\">{{textField != null ? item[textField] : item}}</mat-option>\n  </mat-select>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n  \n  \n</mat-form-field>\n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                                useExisting: i0.forwardRef(function () { return SelectComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        SelectComponent.propDecorators = {
            items: [{ type: i0.Input }],
            valueField: [{ type: i0.Input }],
            textField: [{ type: i0.Input }],
            multiple: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            hint: [{ type: i0.Input }]
        };
        return SelectComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MY_FORMATS = {
        parse: {
            dateInput: 'LL',
        },
        display: {
            dateInput: 'LL',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    var DatepickerComponent = (function (_super) {
        __extends(DatepickerComponent, _super);
        function DatepickerComponent(_injector, _adapter) {
            var _this = _super.call(this, _injector) || this;
            _this._adapter = _adapter;
            _this.locale = _this.config.locale;
            return _this;
        }
        /**
         * @return {?}
         */
        DatepickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._adapter.setLocale(this.locale);
                this.initializeForm();
            };
        DatepickerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-datepicker',
                        template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <input matInput [disabled]=\"disabled\" [matDatepicker]=\"picker\" [placeholder]=\"placeholder\" #input [(ngModel)]=\"innerValue\" [errorStateMatcher]=\"matcher\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n\n\n  <aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n</mat-form-field>",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                                useExisting: i0.forwardRef(function () { return DatepickerComponent; }),
                                multi: true
                            },
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            { provide: core.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [core.MAT_DATE_LOCALE] },
                            { provide: core.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                        ]
                    },] },
        ];
        /** @nocollapse */
        DatepickerComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: core.DateAdapter }
            ];
        };
        DatepickerComponent.propDecorators = {
            label: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            locale: [{ type: i0.Input }]
        };
        return DatepickerComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SliderComponent = (function (_super) {
        __extends(SliderComponent, _super);
        function SliderComponent(_injector) {
            return _super.call(this, _injector) || this;
        }
        /**
         * @return {?}
         */
        SliderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        SliderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-slider',
                        template: "<aa-comp-label *ngIf=\"label\">\n    {{label}}\n  </aa-comp-label>\n  \n<mat-slider [min]=\"min\" [max]=\"max\" [step]=\"step\" #input [(ngModel)]=\"innerValue\" \n  [disabled]=\"disabled\"></mat-slider>\n\n<mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n\n\n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                                useExisting: i0.forwardRef(function () { return SliderComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        SliderComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        SliderComponent.propDecorators = {
            label: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            min: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            step: [{ type: i0.Input }]
        };
        return SliderComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var IconComponent = (function (_super) {
        __extends(IconComponent, _super);
        function IconComponent(_injector) {
            return _super.call(this, _injector) || this;
        }
        /**
         * @return {?}
         */
        IconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        IconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-icon',
                        template: "<mat-icon [color]=\"color\" [inline]=\"inline\">{{icon}}</mat-icon>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        IconComponent.propDecorators = {
            icon: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            inline: [{ type: i0.Input }]
        };
        return IconComponent;
    }(AnyAppFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextareaComponent = (function (_super) {
        __extends(TextareaComponent, _super);
        function TextareaComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.type = "text";
            return _this;
        }
        /**
         * @return {?}
         */
        TextareaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeForm();
            };
        TextareaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-textarea',
                        template: "<aa-comp-label *ngIf=\"label\">\n  {{label}}\n</aa-comp-label>\n\n<mat-form-field>\n  <textarea matInput [placeholder]=\"placeholder\" #input [type]=\"type\" [(ngModel)]=\"innerValue\" \n    [errorStateMatcher]=\"matcher\" [disabled]=\"disabled\"></textarea>\n\n  <mat-hint *ngIf=\"hint\">{{hint}}</mat-hint>\n  \n<aa-comp-error [errorControl]=\"formControl\"></aa-comp-error>\n\n</mat-form-field>\n<!--[formControl]=\"form?.controls[formControlName]\"-->",
                        styles: [""],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return TextareaComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        TextareaComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        TextareaComponent.propDecorators = {
            label: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            hint: [{ type: i0.Input }]
        };
        return TextareaComponent;
    }(AnyAppModelControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LabelComponent = (function (_super) {
        __extends(LabelComponent, _super);
        function LabelComponent(_injector) {
            return _super.call(this, _injector) || this;
        }
        /**
         * @return {?}
         */
        LabelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LabelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-label',
                        template: "<label [for]=\"for\">\n  <ng-content></ng-content>\n</label>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        LabelComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        LabelComponent.propDecorators = {
            for: [{ type: i0.Input }]
        };
        return LabelComponent;
    }(AnyAppFormControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormDirective = (function (_super) {
        __extends(FormDirective, _super);
        function FormDirective(_injector) {
            return _super.call(this, _injector) || this;
        }
        /**
         * @return {?}
         */
        FormDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.aaCompForm != null) {
                    this.aaCompForm.ngSubmit.subscribe(function (data) {
                        if (_this.aaCompForm.valid == false) {
                            /** @type {?} */
                            var sb = _this.componentsService.showMessage(_this.config.errorMessages.invalidFormMessage, null);
                            sb.onAction().subscribe(function (x) {
                                _this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK));
                            });
                        }
                    });
                }
            };
        /**
         * @return {?}
         */
        FormDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.reset == true) {
                    this.aaCompForm.resetForm();
                }
            };
        FormDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[aa-comp-form]'
                    },] },
        ];
        /** @nocollapse */
        FormDirective.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        FormDirective.propDecorators = {
            aaCompForm: [{ type: i0.Input }],
            reset: [{ type: i0.Input }],
            invalidFormMessage: [{ type: i0.Input }]
        };
        return FormDirective;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoadingComponent = (function (_super) {
        __extends(LoadingComponent, _super);
        function LoadingComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.visible = false;
            return _this;
        }
        /**
         * @return {?}
         */
        LoadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-loading',
                        template: "<mat-progress-bar *ngIf=\"visible\" mode=\"indeterminate\"></mat-progress-bar>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        LoadingComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        LoadingComponent.propDecorators = {
            visible: [{ type: i0.Input }]
        };
        return LoadingComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ErrorComponent = (function (_super) {
        __extends(ErrorComponent, _super);
        function ErrorComponent(_injector) {
            return _super.call(this, _injector) || this;
        }
        /**
         * @return {?}
         */
        ErrorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ErrorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-error',
                        template: "<mat-error *ngIf=\"errorControl && errorControl.hasError('required')\">\n  {{config.errorMessages.required}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('email')\">\n  {{config.errorMessages.email}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('pattern')\">\n  {{config.errorMessages.pattern}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('minLength')\">\n  {{config.errorMessages.minLength}}\n</mat-error>\n<mat-error *ngIf=\"errorControl && errorControl.hasError('maxLength')\">\n  {{config.errorMessages.maxLength}}\n</mat-error>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ErrorComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        ErrorComponent.propDecorators = {
            errorControl: [{ type: i0.Input }]
        };
        return ErrorComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GenericPaginatorIntl = (function (_super) {
        __extends(GenericPaginatorIntl, _super);
        function GenericPaginatorIntl(config) {
            var _this = _super.call(this) || this;
            _this.config = config;
            /**
             * A label for the range of items within the current page and the length of the whole list.
             */
            _this.getRangeLabel = function (page, pageSize, length) {
                if (length == 0 || pageSize == 0) {
                    return "0 " + _this._of + " " + length;
                }
                length = Math.max(length, 0);
                /** @type {?} */
                var startIndex = page * pageSize;
                /** @type {?} */
                var endIndex = startIndex < length ?
                    Math.min(startIndex + pageSize, length) :
                    startIndex + pageSize;
                return startIndex + 1 + " - " + endIndex + " " + _this._of + " " + length;
            };
            // set labels
            // set labels
            _this.itemsPerPageLabel = config.locales.paginator_itemsPerPage;
            _this.nextPageLabel = config.locales.paginator_nextPage;
            _this.previousPageLabel = config.locales.paginator_previousPage;
            _this.firstPageLabel = config.locales.paginator_firstPage;
            _this.lastPageLabel = config.locales.paginator_lastPage;
            //
            //
            _this._of = config.locales.paginator_of;
            return _this;
        }
        GenericPaginatorIntl.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        GenericPaginatorIntl.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ GenericPaginatorIntl.ngInjectableDef = i0.defineInjectable({ factory: function GenericPaginatorIntl_Factory() { return new GenericPaginatorIntl(i0.inject(ANYAPP_COMPONENTS_CONFIG)); }, token: GenericPaginatorIntl, providedIn: "root" });
        return GenericPaginatorIntl;
    }(material.MatPaginatorIntl));
    /**
     * @param {?} parentIntl
     * @return {?}
     */
    function ANYAPP_PAGINATOR_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new material.MatPaginatorIntl();
    }
    /** @type {?} */
    var ANYAPP_PAGINATOR_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: material.MatPaginatorIntl,
        deps: [[new i0.Optional(), new i0.SkipSelf(), material.MatPaginatorIntl]],
        useFactory: ANYAPP_PAGINATOR_PROVIDER_FACTORY
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GenericSortHeaderIntl = (function (_super) {
        __extends(GenericSortHeaderIntl, _super);
        function GenericSortHeaderIntl(config) {
            var _this = _super.call(this) || this;
            _this.config = config;
            /**
             * ARIA label for the sorting button.
             */
            _this.sortButtonLabel = function (id) {
                return _this._sortBtnLabel + " " + id;
            };
            // set labels
            // set labels
            _this._sortBtnLabel = config.locales.sort_buttonLabel;
            return _this;
        }
        GenericSortHeaderIntl.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        GenericSortHeaderIntl.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ GenericSortHeaderIntl.ngInjectableDef = i0.defineInjectable({ factory: function GenericSortHeaderIntl_Factory() { return new GenericSortHeaderIntl(i0.inject(ANYAPP_COMPONENTS_CONFIG)); }, token: GenericSortHeaderIntl, providedIn: "root" });
        return GenericSortHeaderIntl;
    }(material.MatSortHeaderIntl));
    /**
     * @param {?} parentIntl
     * @return {?}
     */
    function ANYAPP_SORT_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new material.MatSortHeaderIntl();
    }
    /** @type {?} */
    var ANYAPP_SORT_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: material.MatSortHeaderIntl,
        deps: [[new i0.Optional(), new i0.SkipSelf(), material.MatSortHeaderIntl]],
        useFactory: ANYAPP_SORT_PROVIDER_FACTORY
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TopMenuComponent = (function (_super) {
        __extends(TopMenuComponent, _super);
        function TopMenuComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.showFace = false;
            _this.showNotification = false;
            return _this;
        }
        /**
         * @return {?}
         */
        TopMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        TopMenuComponent.prototype.notificationItemClick = /**
         * @return {?}
         */
            function () {
                this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_NOTIFICATION_CLICK));
            };
        /**
         * @return {?}
         */
        TopMenuComponent.prototype.faceItemClick = /**
         * @return {?}
         */
            function () {
                this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_FACE_CLICK));
            };
        /**
         * @param {?} menuItem
         * @return {?}
         */
        TopMenuComponent.prototype.menuItemClick = /**
         * @param {?} menuItem
         * @return {?}
         */
            function (menuItem) {
                if (menuItem)
                    this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, menuItem));
            };
        TopMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-top-menu',
                        template: "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <mat-toolbar-row>\n\n    <div style=\"display: flex; flex:1; justify-content: space-between;\">\n      <div>\n\n        <button *ngIf=\"sideNavRef\" mat-icon-button (click)=\"sideNavRef.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <span>{{title}}</span>\n      </div>\n\n\n      <ng-content></ng-content>\n\n\n      <div>\n\n        <button *ngIf=\"showNotification\" (click)=\"notificationItemClick()\" mat-icon-button>\n          <mat-icon>notification_important</mat-icon>\n        </button>\n\n        <button *ngIf=\"showFace\" (click)=\"faceItemClick()\" mat-icon-button>\n          <mat-icon>face</mat-icon>\n        </button>\n\n        <mat-menu #appMenu=\"matMenu\">\n          <button mat-menu-item *ngFor=\"let menuItem of menu\" (click)=\"menuItemClick(menuItem)\">{{menuItem.text}}</button>\n        </mat-menu>\n\n        <button *ngIf=\"menu && menu.length > 0\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n\n      </div>\n    </div>\n\n  </mat-toolbar-row>\n</mat-toolbar>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TopMenuComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        TopMenuComponent.propDecorators = {
            sideNavRef: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            menu: [{ type: i0.Input }],
            showFace: [{ type: i0.Input }],
            showNotification: [{ type: i0.Input }]
        };
        return TopMenuComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SideMenuComponent = (function (_super) {
        __extends(SideMenuComponent, _super);
        function SideMenuComponent(_injector) {
            var _this = _super.call(this, _injector) || this;
            _this.level = 0;
            return _this;
        }
        /**
         * @return {?}
         */
        SideMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        // pass event emitter to the app
        /**
         * @param {?} model
         * @return {?}
         */
        SideMenuComponent.prototype.onItemClick = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                if (model)
                    this.onEvent.emit(model);
            };
        SideMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-side-menu',
                        template: "<div class=\"wrapper\" [style.paddingLeft.px]=\"level*10\">\n  <div *ngFor=\"let item of items\">\n    <aa-comp-side-menu-item (onEvent)=\"onItemClick($event)\" [item]=\"item\" [level]=\"level\"></aa-comp-side-menu-item>\n\n    <div><!--[hidden]=\"item.children?.length == 0 || !item.expanded\"-->\n      <aa-comp-side-menu [items]=\"item.children\" [level]=\"level+1\"></aa-comp-side-menu>\n    </div>\n  </div>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SideMenuComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        SideMenuComponent.propDecorators = {
            items: [{ type: i0.Input }],
            level: [{ type: i0.Input }]
        };
        return SideMenuComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SideMenuItemComponent = (function (_super) {
        __extends(SideMenuItemComponent, _super);
        function SideMenuItemComponent(_inject) {
            return _super.call(this, _inject) || this;
        }
        /**
         * @return {?}
         */
        SideMenuItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SideMenuItemComponent.prototype.clickMenuItem = /**
         * @return {?}
         */
            function () {
                if (this.item.children && this.item.children.length > 0) {
                    this.item.expanded = !this.item.expanded;
                }
                if (this.item.navigateUrl != null) {
                    this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, this.item));
                }
            };
        SideMenuItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aa-comp-side-menu-item',
                        template: "<div *ngIf=\"item\" (click)=\"clickMenuItem()\">\n  <button mat-button [class.sub]=\"level > 0\">\n    \n    <span>{{item.text}}</span>\n    \n    <mat-icon *ngIf=\"item.children?.length > 0\">\n        {{item.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}\n    </mat-icon>\n  </button>\n</div>",
                        styles: ["button{width:100%;text-align:left}button:not(.sub) span{text-transform:uppercase}mat-icon{position:absolute;top:0;right:0;margin:4px}.sub{font-weight:400}"]
                    },] },
        ];
        /** @nocollapse */
        SideMenuItemComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        SideMenuItemComponent.propDecorators = {
            item: [{ type: i0.Input }],
            level: [{ type: i0.Input }]
        };
        return SideMenuItemComponent;
    }(AnyAppBaseControl));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ComponentsModule = (function () {
        function ComponentsModule() {
        }
        /**
         * @return {?}
         */
        ComponentsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ComponentsModule,
                    providers: [{
                            provide: ANYAPP_COMPONENTS_CONFIG,
                            useValue: {
                                messageDuration: 3000,
                                locale: "en-US",
                                locales: {
                                    paginator_firstPage: "First page",
                                    paginator_lastPage: "Last page",
                                    paginator_itemsPerPage: "Items per page",
                                    paginator_of: "of",
                                    paginator_nextPage: "Next page",
                                    paginator_previousPage: "Previous page",
                                    sort_buttonLabel: "Change sorting for"
                                },
                                errorMessages: {
                                    required: "This field is required",
                                    email: "Please enter a valid e-mail address",
                                    pattern: "Your input does not match the pattern",
                                    minLength: "The length of your input is too short",
                                    maxLength: "The length of your input is too long",
                                    invalidFormMessage: "The form is invalid. Please correct any errors."
                                },
                                tableConfig: {
                                    pageSize: 20,
                                    selectOption: TableSelectEnum.NoSelect
                                },
                                buttonConfig: {
                                    buttonTimeoutThreshold: 250
                                },
                                formConfig: {}
                            }
                        },
                        {
                            provide: material.MatPaginatorIntl,
                            useClass: GenericPaginatorIntl,
                            deps: [ANYAPP_COMPONENTS_CONFIG]
                        },
                        {
                            provide: material.MatSortHeaderIntl,
                            useClass: GenericSortHeaderIntl,
                            deps: [ANYAPP_COMPONENTS_CONFIG]
                        }]
                };
            };
        ComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            animations.BrowserAnimationsModule,
                            material.MatButtonModule,
                            material.MatIconModule,
                            material.MatSnackBarModule,
                            material.MatSidenavModule,
                            material.MatToolbarModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatProgressBarModule,
                            material.MatCheckboxModule,
                            material.MatSlideToggleModule,
                            material.MatSelectModule,
                            material.MatDatepickerModule,
                            material.MatSliderModule,
                            material.MatTableModule,
                            material.MatPaginatorModule,
                            material.MatSortModule,
                            material.MatInputModule
                        ],
                        declarations: [
                            TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
                            FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
                            TopMenuComponent, SideMenuComponent,
                            SideMenuItemComponent
                        ],
                        exports: [
                            TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
                            FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
                            TopMenuComponent, SideMenuComponent,
                            material.MatSidenavModule, material.MatToolbarModule
                        ],
                    },] },
        ];
        return ComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.AnyAppEventModel = AnyAppEventModel;
    exports.AnyAppMenuItem = AnyAppMenuItem;
    exports.AnyAppTreeModel = AnyAppTreeModel;
    exports.AnyAppEventKeys = AnyAppEventKeys;
    exports.ANYAPP_COMPONENTS_CONFIG = ANYAPP_COMPONENTS_CONFIG;
    exports.TableSelectEnum = TableSelectEnum;
    exports.ComponentsService = ComponentsService;
    exports.ComponentsModule = ComponentsModule;
    exports.ButtonComponent = ButtonComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.MY_FORMATS = MY_FORMATS;
    exports.DatepickerComponent = DatepickerComponent;
    exports.FormDirective = FormDirective;
    exports.IconComponent = IconComponent;
    exports.InputComponent = InputComponent;
    exports.LabelComponent = LabelComponent;
    exports.LoadingComponent = LoadingComponent;
    exports.SelectComponent = SelectComponent;
    exports.SliderComponent = SliderComponent;
    exports.TableComponent = TableComponent;
    exports.TextareaComponent = TextareaComponent;
    exports.ErrorComponent = ErrorComponent;
    exports.TopMenuComponent = TopMenuComponent;
    exports.SideMenuComponent = SideMenuComponent;
    exports.ɵa = AnyAppBaseControl;
    exports.ɵc = AnyAppFormControl;
    exports.ɵb = AnyAppModelControl;
    exports.ɵd = SideMenuItemComponent;
    exports.ɵe = GenericPaginatorIntl;
    exports.ɵf = GenericSortHeaderIntl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55YXBwLWNvbXBvbmVudHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2NvbXBvbmVudHMubW9kZWwudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvY29tcG9uZW50cy5jb25maWcudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvY29tcG9uZW50cy5zZXJ2aWNlLnRzIixudWxsLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvYmFzZS1jb250cm9sLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3V0aWwudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9lcnJvci1zdGF0ZS1tYXRjaGVyLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL21vZGVsLWNvbnRyb2wudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9mb3JtL2Zvcm0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3BhZ2luYXRvci5pbnRsLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3NvcnQuaW50bC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvc2lkZS1tZW51L3NpZGUtbWVudS1pdGVtL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9jb21wb25lbnRzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW55QXBwRXZlbnRNb2RlbDxUID0ge30+IHtcclxuXHRrZXk6IEFueUFwcEV2ZW50S2V5cztcclxuXHR2YWx1ZT86IFQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGtleTogQW55QXBwRXZlbnRLZXlzLCB2YWx1ZT86IFQpIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFueUFwcE1lbnVJdGVtIHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0a2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbnlBcHBUcmVlTW9kZWwge1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGlsZHJlbjogQW55QXBwVHJlZU1vZGVsW107XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBleHBhbmRlZD86Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVybD86IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjaGlsZHJlbj86IEFueUFwcFRyZWVNb2RlbFtdLCBleHBhbmRlZD86IGJvb2xlYW4sIG5hdmlnYXRlVXJsPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVXJsID0gbmF2aWdhdGVVcmw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQW55QXBwRXZlbnRLZXlzIHtcclxuXHRNRVNTQUdFX0NMSUNLID0gMSxcclxuXHRNRU5VX0lURU1fQ0xJQ0sgPSAyLFxyXG5cdE1FTlVfRkFDRV9DTElDSyA9IDMsXHJcblx0TUVOVV9OT1RJRklDQVRJT05fQ0xJQ0sgPSA0LFxyXG59IiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbnlBcHBDb21wb25lbnRzQ29uZmlnPignYW55YXBwLWRlZmF1bHQtY29tcG9uZW50cy1vcHRpb25zJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFueUFwcENvbXBvbmVudHNDb25maWcge1xyXG5cdG1lc3NhZ2VEdXJhdGlvbjogbnVtYmVyO1xyXG5cdGxvY2FsZTogc3RyaW5nO1xyXG5cdC8vXHJcblx0ZXJyb3JNZXNzYWdlczogQW55QXBwRXJyb3JNZXNzYWdlcztcclxuXHRsb2NhbGVzOiBBbnlBcHBMb2NhbGVzO1xyXG5cdC8vXHJcblx0YnV0dG9uQ29uZmlnOiBBbnlBcHBCdXR0b25Db25maWc7XHJcblx0Zm9ybUNvbmZpZzogQW55QXBwRm9ybUNvbmZpZztcclxuXHR0YWJsZUNvbmZpZzogQW55QXBwVGFibGVDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwQnV0dG9uQ29uZmlnIHtcclxuXHRidXR0b25UaW1lb3V0VGhyZXNob2xkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwRm9ybUNvbmZpZyB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwVGFibGVDb25maWcge1xyXG5cdHBhZ2VTaXplOiBudW1iZXI7XHJcblx0c2VsZWN0T3B0aW9uOiBUYWJsZVNlbGVjdEVudW07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwRXJyb3JNZXNzYWdlcyB7XHJcblx0cmVxdWlyZWQ6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdHBhdHRlcm46IHN0cmluZztcclxuXHRtaW5MZW5ndGg6IHN0cmluZztcclxuXHRtYXhMZW5ndGg6IHN0cmluZztcclxuXHRpbnZhbGlkRm9ybU1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbnlBcHBMb2NhbGVzIHtcclxuXHRwYWdpbmF0b3JfZmlyc3RQYWdlOiBzdHJpbmc7XHJcblx0cGFnaW5hdG9yX2xhc3RQYWdlOiBzdHJpbmc7XHJcblx0cGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9vZjogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9uZXh0UGFnZTogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9wcmV2aW91c1BhZ2U6IHN0cmluZztcclxuXHJcblx0c29ydF9idXR0b25MYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZVNlbGVjdEVudW0ge1xyXG5cdE5vU2VsZWN0ID0gMCxcclxuXHRTaW5nbGVTZWxlY3QgPSAxLFxyXG5cdE11bHRpU2VsZWN0ID0gMixcclxufSIsImltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZywgTWF0U25hY2tCYXJSZWYsIFNpbXBsZVNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcsIEFueUFwcENvbXBvbmVudHNDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c1NlcnZpY2UgeyAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQW55QXBwQ29tcG9uZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIF9zbmFja2JhcjogTWF0U25hY2tCYXIpIHsgXG4gIH1cblxuICBwdWJsaWMgc2hvd01lc3NhZ2UobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykgOiBNYXRTbmFja0JhclJlZjxTaW1wbGVTbmFja0Jhcj4ge1xuICAgIHJldHVybiB0aGlzLl9zbmFja2Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwgPE1hdFNuYWNrQmFyQ29uZmlnPntcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmNvbmZpZy5tZXNzYWdlRHVyYXRpb25cbiAgICB9KTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgSW5qZWN0b3IsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZywgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHIH0gZnJvbSBcIi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tIFwiLi9jb21wb25lbnRzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQW55QXBwRXZlbnRNb2RlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnlBcHBCYXNlQ29udHJvbCB7XHJcbiAgQE91dHB1dCgpIG9uRXZlbnQ6IEV2ZW50RW1pdHRlcjxBbnlBcHBFdmVudE1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8QW55QXBwRXZlbnRNb2RlbD4oKTtcclxuICBcclxuICBjb25maWc6IEFueUFwcENvbXBvbmVudHNDb25maWc7XHJcbiAgY29tcG9uZW50c1NlcnZpY2U6IENvbXBvbmVudHNTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHRoaXMuY29uZmlnID0gX2luamVjdG9yLmdldChBTllBUFBfQ09NUE9ORU5UU19DT05GSUcpO1xyXG4gICAgdGhpcy5jb21wb25lbnRzU2VydmljZSA9IF9pbmplY3Rvci5nZXQoQ29tcG9uZW50c1NlcnZpY2UpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhc1JlcXVpcmVkRmllbGQgPSAoYWJzdHJhY3RDb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBib29sZWFuID0+IHtcclxuICAgIGlmIChhYnN0cmFjdENvbnRyb2wudmFsaWRhdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gYWJzdHJhY3RDb250cm9sLnZhbGlkYXRvcih7fWFzIEFic3RyYWN0Q29udHJvbCk7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRvciAmJiB2YWxpZGF0b3IucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFic3RyYWN0Q29udHJvbFsnY29udHJvbHMnXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbE5hbWUgaW4gYWJzdHJhY3RDb250cm9sWydjb250cm9scyddKSB7XHJcbiAgICAgICAgICAgIGlmIChhYnN0cmFjdENvbnRyb2xbJ2NvbnRyb2xzJ11bY29udHJvbE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUmVxdWlyZWRGaWVsZChhYnN0cmFjdENvbnRyb2xbJ2NvbnRyb2xzJ11bY29udHJvbE5hbWVdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59OyIsImltcG9ydCB7IElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5nRm9ybSwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZywgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHIH0gZnJvbSBcIi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tIFwiLi9iYXNlLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgaGFzUmVxdWlyZWRGaWVsZCB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnlBcHBGb3JtQ29udHJvbCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIHtcclxuICBASW5wdXQoKSBmb3JtOiBOZ0Zvcm07IC8vIGZvcm0gY29udGFpbnMgZm9ybWdyb3VwXHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGhhc1JlcXVpcmVkRmllbGQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHN1cGVyKF9pbmplY3Rvcik7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm1Db250cm9sTmFtZSkgeyAvLyBuYW1lID0gc2V0XHJcbiAgICAgIGlmICh0aGlzLmZvcm1Db250cm9sID09IG51bGwpIHsgLy8gZmMgaXMgbm90IHNldFxyXG4gICAgICAgIGlmICh0aGlzLmZvcm0gJiYgdGhpcy5mb3JtLmZvcm0pIHsgLy8gZmluZCBjb250cm9sIGFuZCBzZXRcclxuICAgICAgICAgIHRoaXMuZm9ybUNvbnRyb2wgPSB0aGlzLmZvcm0uZm9ybS5jb250cm9sc1t0aGlzLmZvcm1Db250cm9sTmFtZV0gYXMgRm9ybUNvbnRyb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5mb3JtQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmhhc1JlcXVpcmVkRmllbGQgPSBoYXNSZXF1aXJlZEZpZWxkKHRoaXMuZm9ybUNvbnRyb2wpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEZvcm1Db250cm9sIH0gZnJvbSAnLi4vZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInN0eWxlXCI+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3JhaXNlZCdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInc3Ryb2tlZCdcIiBtYXQtc3Ryb2tlZC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZsYXQnXCIgbWF0LWZsYXQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiIG1hdC1pY29uLWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInZmFiJ1wiIG1hdC1mYWIgW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hEZWZhdWx0IG1hdC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICN0cmFuc2NsdWRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBBbnlBcHBGb3JtQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpbWVvdXQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuXG4gIEBJbnB1dCgpIHN0eWxlOiAnZGVmYXVsdCcgfCAncmFpc2VkJyB8ICdzdHJva2VkJyB8ICdmbGF0JyB8ICdpY29uJyB8ICdmYWInID0gJ2ZsYXQnXG4gIEBJbnB1dCgpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgc3VibWl0QXR0YWNoZWRGb3JtKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmZvcm0gIT0gbnVsbCAmJiB0aGlzLnR5cGUgPT0gXCJidXR0b25cIikgeyAvLyBpZiBmb3JtIGlzIHNldCBhbmQgdHlwZSBpcyBidXR0b25cbiAgICAgIHRoaXMuZm9ybS5vblN1Ym1pdChldmVudCk7IC8vIHRoaXMgd2lsbCBhbHNvIHVwZGF0ZSB0aGUgc3VibWl0dGVkIHN0YXRlXG4gICAgICAvL3RoaXMuZm9ybS5uZ1N1Ym1pdC5uZXh0KHRydWUpO1xuICAgICAgLy90aGlzLmZvcm0ubmdTdWJtaXQuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIGEgdXNlciBjYW4gbm90IGNsaWNrIHRoZSBidXR0b24gbXVsdGlwbGUgdGltZXMgd2l0aGluIGEgbGltaXRlZCB0aW1lXG4gICAgdGhpcy5oYW5kbGVCdXR0b25UaW1lb3V0VHJlc2hvbGQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQnV0dG9uVGltZW91dFRyZXNob2xkKCkge1xuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldERpc2FibGVkKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zZXREaXNhYmxlZChudWxsKTsgfSwgdGhpcy5jb25maWcuYnV0dG9uQ29uZmlnLmJ1dHRvblRpbWVvdXRUaHJlc2hvbGQpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZClcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltcImJ1dHRvblwiXSwgXCJkaXNhYmxlZFwiLCBkaXNhYmxlZC50b1N0cmluZygpKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bXCJidXR0b25cIl0sIFwiZGlzYWJsZWRcIik7XG4gIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFsbG93U2VsZWN0XCIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJhbGxvd011bHRpU2VsZWN0XCIgKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCIgW21hdENvbHVtbkRlZl09XCJjb2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tjb2x9fSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGNvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG5cbjxtYXQtcGFnaW5hdG9yIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5gLFxuICBzdHlsZXM6IFtgdGFibGV7d2lkdGg6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9cbiAgLy8gbWFuZGF0b3J5XG4gIC8vICBcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IHN0cmluZ1tdO1xuICAvL1xuICAvLyBOb3QgbWFuZGF0b3J5XG4gIC8vXG4gIEBJbnB1dCgpIGFsbG93U29ydDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFsbG93UGFnaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlciA9IDUwO1xuICBASW5wdXQoKSBhbGxvd1NlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd011bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBzZWxlY3Rpb246IFNlbGVjdGlvbk1vZGVsPGFueT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0aGlzLmFsbG93TXVsdGlTZWxlY3QsIFtdKTtcbiAgICBcbiAgICBpZih0aGlzLmFsbG93UGFnaW5nKSB7XG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbGxvd1NvcnQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFueUFwcEVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xyXG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcclxuICAgIHZhciByZXR1cm5WYWwgPSAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcclxuICAgIHJldHVybiByZXR1cm5WYWw7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQW55QXBwRm9ybUNvbnRyb2wgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xcIjtcclxuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gXCIuL2Vycm9yLXN0YXRlLW1hdGNoZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnlBcHBNb2RlbENvbnRyb2wgZXh0ZW5kcyBBbnlBcHBGb3JtQ29udHJvbCB7XHJcblx0cHJpdmF0ZSBfaW5uZXJWYWx1ZTogYW55ID0gbnVsbDtcclxuXHRtYXRjaGVyOiBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0c3VwZXIoX2luamVjdG9yKTtcclxuXHRcdHRoaXMubWF0Y2hlciA9IG5ldyBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlcigpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlubmVyVmFsdWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faW5uZXJWYWx1ZTtcclxuXHR9XHJcblx0c2V0IGlubmVyVmFsdWUodmFsKSB7XHJcblx0XHR0aGlzLl9pbm5lclZhbHVlID0gdmFsO1xyXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5faW5uZXJWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdG9uTW9kZWxDaGFuZ2UoZXZlbnQpIHtcclxuXHRcdGlmICh0aGlzLl9pbm5lclZhbHVlICE9IGV2ZW50KSB7XHJcblx0XHRcdHRoaXMuaW5uZXJWYWx1ZSA9IGV2ZW50OyAvLyB1cGRhdGUgb25seSBpZiBjaGFuZ2VkXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBnZXRzIGNhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIGluaXRpYWxpemVkICh3cml0ZSB0byB2aWV3KVxyXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5faW5uZXJWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gcHJvcGFnYXRlIHRoZSBuZXcgdmFsdWUgdG8gdGhlIG91dHNpZGUgd29ybGRcclxuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XHJcblxyXG5cdC8vIGhhcyBhY2Nlc3MgdG8gYSBmdW5jdGlvbiB0aGF0IGluZm9ybXMgdGhlIG91dHNpZGUgd29ybGQgYWJvdXQgY2hhbmdlc1xyXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcblx0fVxyXG5cclxuXHQvLyByZWdpc3RlcnMgYSBjYWxsYmFjayB0aGF0IGlzIGV4Y3V0ZWQgd2hlbmV2ZXIgYSBmb3JtIGNvbnRyb2wgaXMgw6LCgMKcdG91Y2hlZMOiwoDCnVxyXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCkgeyB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFt0eXBlXT1cInR5cGVcIiBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuXG4gIDxtYXQtaGludCBhbGlnbj1cInN0YXJ0XCIgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIiAqbmdJZj1cIm1heExlbmd0aFwiPnt7aW5wdXQudmFsdWUubGVuZ3RofX0gLyB7e21heExlbmd0aH19PC9tYXQtaGludD5cblxuICBcbiAgPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5cblxuPC9tYXQtZm9ybS1maWVsZD5cbjwhLS1bZm9ybUNvbnRyb2xdPVwiZm9ybT8uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXVwiLS0+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgeyAgXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwidGV4dFwiO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwTW9kZWxDb250cm9sIH0gZnJvbSAnLi4vbW9kZWwtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYDxtYXQtY2hlY2tib3ggKm5nSWY9XCIhc2xpZGVUb2dnbGVcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiPlxuICA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gICAge3tsYWJlbH19XG4gIDwvYWEtY29tcC1sYWJlbD5cbjwvbWF0LWNoZWNrYm94PlxuXG48bWF0LXNsaWRlLXRvZ2dsZSAqbmdJZj1cInNsaWRlVG9nZ2xlXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gICAge3tsYWJlbH19XG4gIDwvYWEtY29tcC1sYWJlbD5cbjwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdhZnRlcic7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcbiAgQElucHV0KCkgc2xpZGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwTW9kZWxDb250cm9sIH0gZnJvbSAnLi4vbW9kZWwtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2VsZWN0ICpuZ0lmPVwiIW11bHRpcGxlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cImhhc1JlcXVpcmVkRmllbGQgPT0gZmFsc2VcIj5NYWFrIGVlbiBrZXV6ZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJ2YWx1ZUZpZWxkICE9IG51bGwgPyBpdGVtW3ZhbHVlRmllbGRdIDogaXRlbVwiPnt7dGV4dEZpZWxkICE9IG51bGwgPyBpdGVtW3RleHRGaWVsZF0gOiBpdGVtfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbiAgXG4gIDxtYXQtc2VsZWN0ICpuZ0lmPVwibXVsdGlwbGVcIiBtdWx0aXBsZSBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0lmPVwiaGFzUmVxdWlyZWRGaWVsZCA9PSBmYWxzZVwiPk1hYWsgZWVuIGtldXplPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgW3ZhbHVlXT1cInZhbHVlRmllbGQgIT0gbnVsbCA/IGl0ZW1bdmFsdWVGaWVsZF0gOiBpdGVtXCI+e3t0ZXh0RmllbGQgIT0gbnVsbCA/IGl0ZW1bdGV4dEZpZWxkXSA6IGl0ZW19fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuXG4gIDxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG4gIFxuICBcbjwvbWF0LWZvcm0tZmllbGQ+XG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nID0gXCJpZFwiO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZyA9IFwidGV4dFwiO1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuaW1wb3J0IHtNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgcm9sbHVwIGlzIHVzZWQsIG1vbWVudCBuZWVkcyB0byBiZSBpbXBvcnRlZCBkaWZmZXJlbnRseS5cbi8vIFNpbmNlIE1vbWVudC5qcyBkb2Vzbid0IGhhdmUgYSBkZWZhdWx0IGV4cG9ydCwgd2Ugbm9ybWFsbHkgbmVlZCB0byBpbXBvcnQgdXNpbmcgdGhlIGAqIGFzYFxuLy8gc3ludGF4LiBIb3dldmVyLCByb2xsdXAgY3JlYXRlcyBhIHN5bnRoZXRpYyBkZWZhdWx0IG1vZHVsZSBhbmQgd2UgdGh1cyBuZWVkIHRvIGltcG9ydCBpdCB1c2luZ1xuLy8gdGhlIGBkZWZhdWx0IGFzYCBzeW50YXguXG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcsIEFueUFwcENvbXBvbmVudHNDb25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzLmNvbmZpZyc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbi8vaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnR9IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IC8qX3JvbGx1cE1vbWVudCB8fCovIF9tb21lbnQ7XG5cbi8vIFNlZSB0aGUgTW9tZW50LmpzIGRvY3MgZm9yIHRoZSBtZWFuaW5nIG9mIHRoZXNlIGZvcm1hdHM6XG4vLyBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9mb3JtYXQvXG5leHBvcnQgY29uc3QgTVlfRk9STUFUUyA9IHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdMTCcsXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXG4gICAgZGF0ZUExMXlMYWJlbDogJ0xMJyxcbiAgICBtb250aFllYXJBMTF5TGFiZWw6ICdNTU1NIFlZWVknLFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1kYXRlcGlja2VyJyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cblxuICA8bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuXG5cbiAgPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlcGlja2VyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZyBgTW9tZW50RGF0ZU1vZHVsZWAgaW4geW91clxuICAgIC8vIGFwcGxpY2F0aW9uJ3Mgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2ZcbiAgICAvLyBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7cHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlciwgZGVwczogW01BVF9EQVRFX0xPQ0FMRV19LFxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTVlfRk9STUFUU30sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgeyAgXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX2FkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5sb2NhbGUgPSB0aGlzLmNvbmZpZy5sb2NhbGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hZGFwdGVyLnNldExvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNsaWRlcicsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG4gIFxuPG1hdC1zbGlkZXIgW21pbl09XCJtaW5cIiBbbWF4XT1cIm1heFwiIFtzdGVwXT1cInN0ZXBcIiAjaW5wdXQgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvbWF0LXNsaWRlcj5cblxuPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cblxuXG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55QXBwRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9mb3JtLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWljb24nLFxuICB0ZW1wbGF0ZTogYDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBbaW5saW5lXT1cImlubGluZVwiPnt7aWNvbn19PC9tYXQtaWNvbj5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGA8YWEtY29tcC1sYWJlbCAqbmdJZj1cImxhYmVsXCI+XG4gIHt7bGFiZWx9fVxuPC9hYS1jb21wLWxhYmVsPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAjaW5wdXQgW3R5cGVdPVwidHlwZVwiIFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFxuICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC90ZXh0YXJlYT5cblxuICA8bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuICBcbjxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+XG5cbjwvbWF0LWZvcm0tZmllbGQ+XG48IS0tW2Zvcm1Db250cm9sXT1cImZvcm0/LmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV1cIi0tPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCBcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRhcmVhQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwTW9kZWxDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7ICBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gXCJ0ZXh0XCI7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEZvcm1Db250cm9sIH0gZnJvbSAnLi4vZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1sYWJlbCcsXG4gIHRlbXBsYXRlOiBgPGxhYmVsIFtmb3JdPVwiZm9yXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3I6IHN0cmluZztcbiAgXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBJbmplY3QsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwRXZlbnRNb2RlbCwgQW55QXBwRXZlbnRLZXlzIH0gZnJvbSAnLi4vY29tcG9uZW50cy5tb2RlbCc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thYS1jb21wLWZvcm1dJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtRGlyZWN0aXZlIGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGFhQ29tcEZvcm06IE5nRm9ybTtcbiAgQElucHV0KCkgcmVzZXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGludmFsaWRGb3JtTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZih0aGlzLmFhQ29tcEZvcm0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5hYUNvbXBGb3JtLm5nU3VibWl0LnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBpZih0aGlzLmFhQ29tcEZvcm0udmFsaWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgc2IgPSB0aGlzLmNvbXBvbmVudHNTZXJ2aWNlLnNob3dNZXNzYWdlKHRoaXMuY29uZmlnLmVycm9yTWVzc2FnZXMuaW52YWxpZEZvcm1NZXNzYWdlLCBudWxsKTtcbiAgICAgICAgICBzYi5vbkFjdGlvbigpLnN1YnNjcmliZSh4ID0+IHtcbiAgICAgICAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsKEFueUFwcEV2ZW50S2V5cy5NRVNTQUdFX0NMSUNLKSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmKHRoaXMucmVzZXQgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hYUNvbXBGb3JtLnJlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZTogYDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPVwidmlzaWJsZVwiIG1vZGU9XCJpbmRldGVybWluYXRlXCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1lcnJvcicsXG4gIHRlbXBsYXRlOiBgPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5yZXF1aXJlZH19XG48L21hdC1lcnJvcj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdlbWFpbCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMuZW1haWx9fVxuPC9tYXQtZXJyb3I+XG48bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcigncGF0dGVybicpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMucGF0dGVybn19XG48L21hdC1lcnJvcj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdtaW5MZW5ndGgnKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLm1pbkxlbmd0aH19XG48L21hdC1lcnJvcj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdtYXhMZW5ndGgnKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLm1heExlbmd0aH19XG48L21hdC1lcnJvcj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7ICBcbiAgQElucHV0KCkgZXJyb3JDb250cm9sOiBGb3JtQ29udHJvbDtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JJbnRsICB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZyB9IGZyb20gXCIuLi9jb21wb25lbnRzLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljUGFnaW5hdG9ySW50bCBleHRlbmRzIE1hdFBhZ2luYXRvckludGwge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChBTllBUFBfQ09NUE9ORU5UU19DT05GSUcpIHByaXZhdGUgY29uZmlnOiBBbnlBcHBDb21wb25lbnRzQ29uZmlnKSB7XHJcblx0XHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0XHQvLyBzZXQgbGFiZWxzXHJcblx0XHRcdHRoaXMuaXRlbXNQZXJQYWdlTGFiZWwgPSBjb25maWcubG9jYWxlcy5wYWdpbmF0b3JfaXRlbXNQZXJQYWdlO1xyXG5cdFx0XHR0aGlzLm5leHRQYWdlTGFiZWwgPSBjb25maWcubG9jYWxlcy5wYWdpbmF0b3JfbmV4dFBhZ2U7XHJcblx0XHRcdHRoaXMucHJldmlvdXNQYWdlTGFiZWwgPSBjb25maWcubG9jYWxlcy5wYWdpbmF0b3JfcHJldmlvdXNQYWdlO1xyXG5cdFx0XHR0aGlzLmZpcnN0UGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX2ZpcnN0UGFnZTtcclxuXHRcdFx0dGhpcy5sYXN0UGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX2xhc3RQYWdlO1xyXG5cdFx0XHQvL1xyXG5cdFx0XHR0aGlzLl9vZiA9IGNvbmZpZy5sb2NhbGVzLnBhZ2luYXRvcl9vZjtcclxuXHRcdH1cclxuXHRcclxuXHRwcml2YXRlIF9vZjogc3RyaW5nO1xyXG5cdFxyXG5cdC8qKiBBIGxhYmVsIGZvciB0aGUgcmFuZ2Ugb2YgaXRlbXMgd2l0aGluIHRoZSBjdXJyZW50IHBhZ2UgYW5kIHRoZSBsZW5ndGggb2YgdGhlIHdob2xlIGxpc3QuICovXHJcbiAgZ2V0UmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAobGVuZ3RoID09IDAgfHwgcGFnZVNpemUgPT0gMCkgeyByZXR1cm4gYDAgJHt0aGlzLl9vZn0gJHtsZW5ndGh9YDsgfVxyXG5cclxuICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhZ2UgKiBwYWdlU2l6ZTtcclxuXHJcbiAgICAvLyBJZiB0aGUgc3RhcnQgaW5kZXggZXhjZWVkcyB0aGUgbGlzdCBsZW5ndGgsIGRvIG5vdCB0cnkgYW5kIGZpeCB0aGUgZW5kIGluZGV4IHRvIHRoZSBlbmQuXHJcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggPCBsZW5ndGggP1xyXG4gICAgICAgIE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoKSA6XHJcbiAgICAgICAgc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG5cclxuICAgIHJldHVybiBgJHtzdGFydEluZGV4ICsgMX0gLSAke2VuZEluZGV4fSAke3RoaXMuX29mfSAke2xlbmd0aH1gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFOWUFQUF9QQUdJTkFUT1JfUFJPVklERVJfRkFDVE9SWShwYXJlbnRJbnRsOiBNYXRQYWdpbmF0b3JJbnRsKSB7XHJcbiAgcmV0dXJuIHBhcmVudEludGwgfHwgbmV3IE1hdFBhZ2luYXRvckludGwoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFOWUFQUF9QQUdJTkFUT1JfUFJPVklERVIgPSB7XHJcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBNYXRQYWdpbmF0b3JJbnRsIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXHJcbiAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCxcclxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTWF0UGFnaW5hdG9ySW50bF1dLFxyXG4gIHVzZUZhY3Rvcnk6IEFOWUFQUF9QQUdJTkFUT1JfUFJPVklERVJfRkFDVE9SWVxyXG59OyIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0U29ydEhlYWRlckludGwgIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gXCIuLi9jb21wb25lbnRzLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBbnlBcHBDb21wb25lbnRzQ29uZmlnIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdlbmVyaWNTb3J0SGVhZGVySW50bCBleHRlbmRzIE1hdFNvcnRIZWFkZXJJbnRsIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQW55QXBwQ29tcG9uZW50c0NvbmZpZykge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IGxhYmVsc1xyXG5cdFx0XHR0aGlzLl9zb3J0QnRuTGFiZWwgPSBjb25maWcubG9jYWxlcy5zb3J0X2J1dHRvbkxhYmVsO1xyXG5cdFx0fVxyXG5cdFxyXG5cdHByaXZhdGUgX3NvcnRCdG5MYWJlbDogc3RyaW5nO1xyXG5cdFxyXG5cdC8qKiBBUklBIGxhYmVsIGZvciB0aGUgc29ydGluZyBidXR0b24uICovXHJcbiAgc29ydEJ1dHRvbkxhYmVsID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBgJHt0aGlzLl9zb3J0QnRuTGFiZWx9ICR7aWR9YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBTllBUFBfU09SVF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudEludGw6IE1hdFNvcnRIZWFkZXJJbnRsKSB7XHJcbiAgcmV0dXJuIHBhcmVudEludGwgfHwgbmV3IE1hdFNvcnRIZWFkZXJJbnRsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBTllBUFBfU09SVF9QUk9WSURFUiA9IHtcclxuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE1hdFBhZ2luYXRvckludGwgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cclxuICBwcm92aWRlOiBNYXRTb3J0SGVhZGVySW50bCxcclxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTWF0U29ydEhlYWRlckludGxdXSxcclxuICB1c2VGYWN0b3J5OiBBTllBUFBfU09SVF9QUk9WSURFUl9GQUNUT1JZXHJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RvciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcbmltcG9ydCB7IEFueUFwcE1lbnVJdGVtLCBBbnlBcHBFdmVudE1vZGVsLCBBbnlBcHBFdmVudEtleXMgfSBmcm9tICcuLi9jb21wb25lbnRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC10b3AtbWVudScsXG4gIHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16NlwiPlxuICA8bWF0LXRvb2xiYXItcm93PlxuXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXg6MTsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1wiPlxuICAgICAgPGRpdj5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2lkZU5hdlJlZlwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2lkZU5hdlJlZi50b2dnbGUoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG5cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dOb3RpZmljYXRpb25cIiAoY2xpY2spPVwibm90aWZpY2F0aW9uSXRlbUNsaWNrKClcIiBtYXQtaWNvbi1idXR0b24+XG4gICAgICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbl9pbXBvcnRhbnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0ZhY2VcIiAoY2xpY2spPVwiZmFjZUl0ZW1DbGljaygpXCIgbWF0LWljb24tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtaWNvbj5mYWNlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPG1hdC1tZW51ICNhcHBNZW51PVwibWF0TWVudVwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgbWVudUl0ZW0gb2YgbWVudVwiIChjbGljayk9XCJtZW51SXRlbUNsaWNrKG1lbnVJdGVtKVwiPnt7bWVudUl0ZW0udGV4dH19PC9idXR0b24+XG4gICAgICAgIDwvbWF0LW1lbnU+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm1lbnUgJiYgbWVudS5sZW5ndGggPiAwXCIgbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJhcHBNZW51XCI+XG4gICAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFRvcE1lbnVDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBASW5wdXQoKSBzaWRlTmF2UmVmOiBhbnk7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWVudTogQW55QXBwTWVudUl0ZW1bXTtcbiAgQElucHV0KCkgc2hvd0ZhY2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd05vdGlmaWNhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBub3RpZmljYXRpb25JdGVtQ2xpY2soKSB7XG4gICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWwoQW55QXBwRXZlbnRLZXlzLk1FTlVfTk9USUZJQ0FUSU9OX0NMSUNLKSk7XG4gIH0gXG5cbiAgZmFjZUl0ZW1DbGljaygpIHtcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsKEFueUFwcEV2ZW50S2V5cy5NRU5VX0ZBQ0VfQ0xJQ0spKTtcbiAgfVxuXG4gIG1lbnVJdGVtQ2xpY2sobWVudUl0ZW06IEFueUFwcE1lbnVJdGVtKSB7XG4gICAgaWYobWVudUl0ZW0pICAgIFxuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWw8QW55QXBwTWVudUl0ZW0+KEFueUFwcEV2ZW50S2V5cy5NRU5VX0lURU1fQ0xJQ0ssIG1lbnVJdGVtKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcbmltcG9ydCB7IEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcFRyZWVNb2RlbCB9IGZyb20gJy4uL2NvbXBvbmVudHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNpZGUtbWVudScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndyYXBwZXJcIiBbc3R5bGUucGFkZGluZ0xlZnQucHhdPVwibGV2ZWwqMTBcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxhYS1jb21wLXNpZGUtbWVudS1pdGVtIChvbkV2ZW50KT1cIm9uSXRlbUNsaWNrKCRldmVudClcIiBbaXRlbV09XCJpdGVtXCIgW2xldmVsXT1cImxldmVsXCI+PC9hYS1jb21wLXNpZGUtbWVudS1pdGVtPlxuXG4gICAgPGRpdj48IS0tW2hpZGRlbl09XCJpdGVtLmNoaWxkcmVuPy5sZW5ndGggPT0gMCB8fCAhaXRlbS5leHBhbmRlZFwiLS0+XG4gICAgICA8YWEtY29tcC1zaWRlLW1lbnUgW2l0ZW1zXT1cIml0ZW0uY2hpbGRyZW5cIiBbbGV2ZWxdPVwibGV2ZWwrMVwiPjwvYWEtY29tcC1zaWRlLW1lbnU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtczogQW55QXBwVHJlZU1vZGVsW107XG4gIEBJbnB1dCgpIGxldmVsOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvLyBwYXNzIGV2ZW50IGVtaXR0ZXIgdG8gdGhlIGFwcFxuICBvbkl0ZW1DbGljayhtb2RlbDogQW55QXBwRXZlbnRNb2RlbDxBbnlBcHBUcmVlTW9kZWw+KSB7XG4gICAgaWYobW9kZWwpXG4gICAgICB0aGlzLm9uRXZlbnQuZW1pdChtb2RlbCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcFRyZWVNb2RlbCwgQW55QXBwRXZlbnRNb2RlbCwgQW55QXBwRXZlbnRLZXlzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy5tb2RlbCc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uLy4uL2Jhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtc2lkZS1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJpdGVtXCIgKGNsaWNrKT1cImNsaWNrTWVudUl0ZW0oKVwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW2NsYXNzLnN1Yl09XCJsZXZlbCA+IDBcIj5cbiAgICBcbiAgICA8c3Bhbj57e2l0ZW0udGV4dH19PC9zcGFuPlxuICAgIFxuICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uY2hpbGRyZW4/Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAge3tpdGVtLmV4cGFuZGVkID8gJ2tleWJvYXJkX2Fycm93X2Rvd24nIDogJ2tleWJvYXJkX2Fycm93X3JpZ2h0J319XG4gICAgPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgYnV0dG9ue3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpsZWZ0fWJ1dHRvbjpub3QoLnN1Yikgc3Bhbnt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9bWF0LWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDttYXJnaW46NHB4fS5zdWJ7Zm9udC13ZWlnaHQ6NDAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVNZW51SXRlbUNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogQW55QXBwVHJlZU1vZGVsO1xuICBASW5wdXQoKSBsZXZlbDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3Q6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoX2luamVjdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGNsaWNrTWVudUl0ZW0oKSB7ICAgIFxuICAgIGlmKHRoaXMuaXRlbS5jaGlsZHJlbiAmJiB0aGlzLml0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pdGVtLmV4cGFuZGVkID0gIXRoaXMuaXRlbS5leHBhbmRlZDtcbiAgICB9XG5cbiAgICBpZih0aGlzLml0ZW0ubmF2aWdhdGVVcmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobmV3IEFueUFwcEV2ZW50TW9kZWw8QW55QXBwVHJlZU1vZGVsPihBbnlBcHBFdmVudEtleXMuTUVOVV9JVEVNX0NMSUNLLCB0aGlzLml0ZW0pKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJ1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLCBNYXRTaWRlbmF2TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRUcmVlTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRNZW51TW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZSwgTWF0U29ydE1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0U2xpZGVyTW9kdWxlLCBNYXRQYWdpbmF0b3JJbnRsLCBNYXRTb3J0SGVhZGVySW50bFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gJy4vY29tcG9uZW50cy5jb25maWcnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uZGlyZWN0aXZlJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW5lcmljUGFnaW5hdG9ySW50bCB9IGZyb20gJy4vdGFibGUvcGFnaW5hdG9yLmludGwnO1xuaW1wb3J0IHsgR2VuZXJpY1NvcnRIZWFkZXJJbnRsIH0gZnJvbSAnLi90YWJsZS9zb3J0LmludGwnO1xuaW1wb3J0IHsgVG9wTWVudUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NpZGUtbWVudS9zaWRlLW1lbnUtaXRlbS9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVTZWxlY3RFbnVtIH0gZnJvbSAnLi9jb21wb25lbnRzLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcblxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgLy9NYXRUcmVlTW9kdWxlLFxuICAgIC8vTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsIElucHV0Q29tcG9uZW50LCBDaGVja2JveENvbXBvbmVudCwgU2VsZWN0Q29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIERhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybURpcmVjdGl2ZSwgVGV4dGFyZWFDb21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQsIEljb25Db21wb25lbnQsIExvYWRpbmdDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgIFRvcE1lbnVDb21wb25lbnQsIFNpZGVNZW51Q29tcG9uZW50LFxuICAgIC8vIG5vIGV4cG9ydFxuICAgIFNpZGVNZW51SXRlbUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsIElucHV0Q29tcG9uZW50LCBDaGVja2JveENvbXBvbmVudCwgU2VsZWN0Q29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIERhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybURpcmVjdGl2ZSwgVGV4dGFyZWFDb21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQsIEljb25Db21wb25lbnQsIExvYWRpbmdDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgIFRvcE1lbnVDb21wb25lbnQsIFNpZGVNZW51Q29tcG9uZW50LFxuICAgIC8vIG1hdGVyaWFsIGV4cG9ydHNcbiAgICBNYXRTaWRlbmF2TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlXG4gIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29tcG9uZW50c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHLFxuICAgICAgICB1c2VWYWx1ZToge1xuICAgICAgICAgIG1lc3NhZ2VEdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcblxuICAgICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICAgIHBhZ2luYXRvcl9maXJzdFBhZ2U6IFwiRmlyc3QgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX2xhc3RQYWdlOiBcIkxhc3QgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTogXCJJdGVtcyBwZXIgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX29mOiBcIm9mXCIsXG4gICAgICAgICAgICBwYWdpbmF0b3JfbmV4dFBhZ2U6IFwiTmV4dCBwYWdlXCIsXG4gICAgICAgICAgICBwYWdpbmF0b3JfcHJldmlvdXNQYWdlOiBcIlByZXZpb3VzIHBhZ2VcIixcbiAgICAgICAgICAgIHNvcnRfYnV0dG9uTGFiZWw6IFwiQ2hhbmdlIHNvcnRpbmcgZm9yXCJcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgZW1haWw6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZS1tYWlsIGFkZHJlc3NcIixcbiAgICAgICAgICAgIHBhdHRlcm46IFwiWW91ciBpbnB1dCBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVyblwiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIlRoZSBsZW5ndGggb2YgeW91ciBpbnB1dCBpcyB0b28gc2hvcnRcIixcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJUaGUgbGVuZ3RoIG9mIHlvdXIgaW5wdXQgaXMgdG9vIGxvbmdcIixcbiAgICAgICAgICAgIGludmFsaWRGb3JtTWVzc2FnZTogXCJUaGUgZm9ybSBpcyBpbnZhbGlkLiBQbGVhc2UgY29ycmVjdCBhbnkgZXJyb3JzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWJsZUNvbmZpZzoge1xuICAgICAgICAgICAgcGFnZVNpemU6IDIwLFxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uOiBUYWJsZVNlbGVjdEVudW0uTm9TZWxlY3RcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgYnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICBidXR0b25UaW1lb3V0VGhyZXNob2xkOiAyNTBcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZm9ybUNvbmZpZzoge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCxcbiAgICAgICAgdXNlQ2xhc3M6IEdlbmVyaWNQYWdpbmF0b3JJbnRsLFxuICAgICAgICBkZXBzOiBbQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTWF0U29ydEhlYWRlckludGwsXG4gICAgICAgIHVzZUNsYXNzOiBHZW5lcmljU29ydEhlYWRlckludGwsXG4gICAgICAgIGRlcHM6IFtBTllBUFBfQ09NUE9ORU5UU19DT05GSUddXG4gICAgICB9XVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkluamVjdGFibGUiLCJJbmplY3QiLCJNYXRTbmFja0JhciIsIkV2ZW50RW1pdHRlciIsIk91dHB1dCIsInRzbGliXzEuX19leHRlbmRzIiwiSW5wdXQiLCJDb21wb25lbnQiLCJJbmplY3RvciIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJIb3N0TGlzdGVuZXIiLCJNYXRUYWJsZURhdGFTb3VyY2UiLCJTZWxlY3Rpb25Nb2RlbCIsIlZpZXdDaGlsZCIsIk1hdFBhZ2luYXRvciIsIk1hdFNvcnQiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJEYXRlQWRhcHRlciIsIk1vbWVudERhdGVBZGFwdGVyIiwiTUFUX0RBVEVfTE9DQUxFIiwiTUFUX0RBVEVfRk9STUFUUyIsIkRpcmVjdGl2ZSIsIk1hdFBhZ2luYXRvckludGwiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwiTWF0U29ydEhlYWRlckludGwiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0U2xpZGVyTW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRQYWdpbmF0b3JNb2R1bGUiLCJNYXRTb3J0TW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7UUFBQTtRQUlDLDBCQUFZLEdBQW9CLEVBQUUsS0FBUztZQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25COytCQVBGO1FBUUMsQ0FBQTtRQUVEOzs7NkJBVkE7UUFhQyxDQUFBO0FBSEQsUUFLQTtRQU9JLHlCQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsUUFBNEIsRUFBRSxRQUFrQixFQUFFLFdBQW9CO1lBQ3hHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDbEM7Ozs7UUFFRCxnQ0FBTTs7O1lBQU47Z0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEM7OEJBaENMO1FBaUNDLENBQUE7QUFsQkQ7O1FBcUJDLGdCQUFpQjtRQUNqQixrQkFBbUI7UUFDbkIsa0JBQW1CO1FBQ25CLDBCQUEyQjs7b0NBSDNCLGFBQWE7b0NBQ2IsZUFBZTtvQ0FDZixlQUFlO29DQUNmLHVCQUF1Qjs7Ozs7O0FDdkN4QjtBQUVBLFFBQWEsd0JBQXdCLEdBQUcsSUFBSUEsaUJBQWMsQ0FBeUIs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