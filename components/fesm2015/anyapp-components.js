import { InjectionToken, Injectable, Inject, Output, EventEmitter, Input, Optional, SkipSelf, Component, Injector, NgModule, ViewChild, forwardRef, HostListener, ElementRef, Renderer2, Directive, defineInjectable, inject } from '@angular/core';
import { MatSnackBar, MatSort, MatPaginator, MatTableDataSource, MatPaginatorIntl, MatSortHeaderIntl, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatSliderModule } from '@angular/material';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import 'moment';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class AnyAppEventModel {
    /**
     * @param {?} key
     * @param {?=} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class AnyAppMenuItem {
}
class AnyAppTreeModel {
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
/** @enum {number} */
const AnyAppEventKeys = {
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
const ANYAPP_COMPONENTS_CONFIG = new InjectionToken('anyapp-default-components-options');
/** @enum {number} */
const TableSelectEnum = {
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
class ComponentsService {
    /**
     * @param {?} config
     * @param {?} _snackbar
     */
    constructor(config, _snackbar) {
        this.config = config;
        this._snackbar = _snackbar;
    }
    /**
     * @param {?} message
     * @param {?} action
     * @return {?}
     */
    showMessage(message, action) {
        return this._snackbar.open(message, action, /** @type {?} */ ({
            duration: this.config.messageDuration
        }));
    }
}
ComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
ComponentsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] },
    { type: MatSnackBar }
];
/** @nocollapse */ ComponentsService.ngInjectableDef = defineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(inject(ANYAPP_COMPONENTS_CONFIG), inject(MatSnackBar$1)); }, token: ComponentsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        this._injector = _injector;
        this.onEvent = new EventEmitter();
        this.config = _injector.get(ANYAPP_COMPONENTS_CONFIG);
        this.componentsService = _injector.get(ComponentsService);
    }
}
AnyAppBaseControl.propDecorators = {
    onEvent: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const hasRequiredField = (abstractControl) => {
    if (abstractControl.validator) {
        /** @type {?} */
        const validator = abstractControl.validator(/** @type {?} */ ({}));
        if (validator && validator["required"]) {
            return true;
        }
    }
    if (abstractControl['controls']) {
        for (const controlName in abstractControl['controls']) {
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
class AnyAppFormControl extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    initializeForm() {
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
    }
}
AnyAppFormControl.propDecorators = {
    form: [{ type: Input }],
    formControlName: [{ type: Input }],
    formControl: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonComponent extends AnyAppFormControl {
    /**
     * @param {?} _injector
     * @param {?} renderer
     * @param {?} el
     */
    constructor(_injector, renderer, el) {
        super(_injector);
        this.renderer = renderer;
        this.el = el;
        this.timeout = true;
        this.type = 'button';
        this.style = 'flat';
        this.color = 'primary';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    submitAttachedForm(event) {
        if (this.form != null && this.type == "button") {
            // if form is set and type is button
            this.form.onSubmit(event); // this will also update the submitted state
            //this.form.ngSubmit.next(true);
            //this.form.ngSubmit.emit(event);
        }
        // make sure a user can not click the button multiple times within a limited time
        this.handleButtonTimeoutTreshold();
    }
    /**
     * @return {?}
     */
    handleButtonTimeoutTreshold() {
        if (this.timeout) {
            setTimeout(() => {
                this.setDisabled(true);
                setTimeout(() => { this.setDisabled(null); }, this.config.buttonConfig.buttonTimeoutThreshold);
            }, 0);
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabled(disabled) {
        if (disabled)
            this.renderer.setAttribute(this.el.nativeElement.children["button"], "disabled", disabled.toString());
        else
            this.renderer.removeAttribute(this.el.nativeElement.children["button"], "disabled");
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-button',
                template: `<ng-container [ngSwitch]="style">
  <button id="button" *ngSwitchCase="'raised'" mat-raised-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'stroked'" mat-stroked-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'flat'" mat-flat-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'icon'" mat-icon-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchCase="'fab'" mat-fab [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
  <button id="button" *ngSwitchDefault mat-button [type]="type" [disabled]="disabled" [color]="color"><ng-container *ngTemplateOutlet="transclude"></ng-container></button>
</ng-container>

<ng-template #transclude><ng-content></ng-content></ng-template>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: Injector },
    { type: Renderer2 },
    { type: ElementRef }
];
ButtonComponent.propDecorators = {
    timeout: [{ type: Input }],
    type: [{ type: Input }],
    style: [{ type: Input }],
    color: [{ type: Input }],
    submitAttachedForm: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TableComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        //
        // Not mandatory
        //
        this.allowSort = true;
        this.allowPaging = true;
        this.pageSize = 50;
        this.allowSelect = false;
        this.allowMultiSelect = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.data);
        this.selection = new SelectionModel(this.allowMultiSelect, []);
        if (this.allowPaging) {
            this.paginator.pageSize = this.pageSize;
            this.dataSource.paginator = this.paginator;
        }
        if (this.allowSort)
            this.dataSource.sort = this.sort;
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected == numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-table',
                template: `<table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">
  
  <ng-container *ngIf="allowSelect" matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox *ngIf="allowMultiSelect" (change)="$event ? masterToggle() : null"
                    [checked]="selection.hasValue() && isAllSelected()"
                    [indeterminate]="selection.hasValue() && !isAllSelected()">
      </mat-checkbox>
    </th>
    <td mat-cell *matCellDef="let row">
      <mat-checkbox (click)="$event.stopPropagation()"
                    (change)="$event ? selection.toggle(row) : null"
                    [checked]="selection.isSelected(row)">
      </mat-checkbox>
    </td>
  </ng-container>

  <ng-container *ngFor="let col of columns" [matColumnDef]="col">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col}} </th>
    <td mat-cell *matCellDef="let element"> {{element[col]}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="columns"></tr>
  <tr mat-row *matRowDef="let row; columns: columns;"></tr>
</table>

<mat-paginator showFirstLastButtons></mat-paginator>`,
                styles: [`table{width:100%}`]
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: Injector }
];
TableComponent.propDecorators = {
    data: [{ type: Input }],
    columns: [{ type: Input }],
    allowSort: [{ type: Input }],
    allowPaging: [{ type: Input }],
    pageSize: [{ type: Input }],
    allowSelect: [{ type: Input }],
    allowMultiSelect: [{ type: Input }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AnyAppErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        /** @type {?} */
        var returnVal = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        return returnVal;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AnyAppModelControl extends AnyAppFormControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this._innerValue = null;
        // propagate the new value to the outside world
        this.propagateChange = (_) => { };
        this.matcher = new AnyAppErrorStateMatcher();
    }
    /**
     * @return {?}
     */
    get innerValue() {
        return this._innerValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set innerValue(val) {
        this._innerValue = val;
        this.propagateChange(this._innerValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onModelChange(event) {
        if (this._innerValue != event) {
            this.innerValue = event; // update only if changed
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            this._innerValue = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.type = "text";
        this.maxLength = null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-input',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <input matInput [placeholder]="placeholder" #input [type]="type" [(ngModel)]="innerValue" 
    [errorStateMatcher]="matcher" [disabled]="disabled">

  <mat-hint align="start" *ngIf="hint">{{hint}}</mat-hint>
  <mat-hint align="end" *ngIf="maxLength">{{input.value.length}} / {{maxLength}}</mat-hint>

  
  <aa-comp-error [errorControl]="formControl"></aa-comp-error>

</mat-form-field>
<!--[formControl]="form?.controls[formControlName]"-->`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => InputComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: Injector }
];
InputComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    hint: [{ type: Input }],
    maxLength: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.labelPosition = 'after';
        this.slideToggle = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-checkbox',
                template: `<mat-checkbox *ngIf="!slideToggle" #input [(ngModel)]="innerValue" [labelPosition]="labelPosition">
  <aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
</mat-checkbox>

<mat-slide-toggle *ngIf="slideToggle" #input [(ngModel)]="innerValue" [disabled]="disabled">
  <aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
</mat-slide-toggle>

<mat-hint *ngIf="hint">{{hint}}</mat-hint>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => CheckboxComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [
    { type: Injector }
];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    labelPosition: [{ type: Input }],
    hint: [{ type: Input }],
    slideToggle: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.valueField = "id";
        this.textField = "text";
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-select',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <mat-select *ngIf="!multiple" [placeholder]="placeholder" #input [(ngModel)]="innerValue" [disabled]="disabled"
    [errorStateMatcher]="matcher">
    <mat-option *ngIf="hasRequiredField == false">Maak een keuze</mat-option>
    <mat-option *ngFor="let item of items" [value]="valueField != null ? item[valueField] : item">{{textField != null ? item[textField] : item}}</mat-option>
  </mat-select>
  
  <mat-select *ngIf="multiple" multiple [placeholder]="placeholder" #input [(ngModel)]="innerValue" [disabled]="disabled"
    [errorStateMatcher]="matcher">
    <mat-option *ngIf="hasRequiredField == false">Maak een keuze</mat-option>
    <mat-option *ngFor="let item of items" [value]="valueField != null ? item[valueField] : item">{{textField != null ? item[textField] : item}}</mat-option>
  </mat-select>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>
  
  
</mat-form-field>
<aa-comp-error [errorControl]="formControl"></aa-comp-error>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => SelectComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: Injector }
];
SelectComponent.propDecorators = {
    items: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    multiple: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MY_FORMATS = {
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
class DatepickerComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     * @param {?} _adapter
     */
    constructor(_injector, _adapter) {
        super(_injector);
        this._adapter = _adapter;
        this.locale = this.config.locale;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._adapter.setLocale(this.locale);
        this.initializeForm();
    }
}
DatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-datepicker',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <input matInput [disabled]="disabled" [matDatepicker]="picker" [placeholder]="placeholder" #input [(ngModel)]="innerValue" [errorStateMatcher]="matcher">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>


  <aa-comp-error [errorControl]="formControl"></aa-comp-error>
</mat-form-field>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => DatepickerComponent),
                        multi: true
                    },
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ]
            },] },
];
/** @nocollapse */
DatepickerComponent.ctorParameters = () => [
    { type: Injector },
    { type: DateAdapter }
];
DatepickerComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    hint: [{ type: Input }],
    locale: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-slider',
                template: `<aa-comp-label *ngIf="label">
    {{label}}
  </aa-comp-label>
  
<mat-slider [min]="min" [max]="max" [step]="step" #input [(ngModel)]="innerValue" 
  [disabled]="disabled"></mat-slider>

<mat-hint *ngIf="hint">{{hint}}</mat-hint>


<aa-comp-error [errorControl]="formControl"></aa-comp-error>`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
                        useExisting: forwardRef(() => SliderComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: Injector }
];
SliderComponent.propDecorators = {
    label: [{ type: Input }],
    hint: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IconComponent extends AnyAppFormControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-icon',
                template: `<mat-icon [color]="color" [inline]="inline">{{icon}}</mat-icon>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: Injector }
];
IconComponent.propDecorators = {
    icon: [{ type: Input }],
    color: [{ type: Input }],
    inline: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TextareaComponent extends AnyAppModelControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.type = "text";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeForm();
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-textarea',
                template: `<aa-comp-label *ngIf="label">
  {{label}}
</aa-comp-label>

<mat-form-field>
  <textarea matInput [placeholder]="placeholder" #input [type]="type" [(ngModel)]="innerValue" 
    [errorStateMatcher]="matcher" [disabled]="disabled"></textarea>

  <mat-hint *ngIf="hint">{{hint}}</mat-hint>
  
<aa-comp-error [errorControl]="formControl"></aa-comp-error>

</mat-form-field>
<!--[formControl]="form?.controls[formControlName]"-->`,
                styles: [``],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextareaComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [
    { type: Injector }
];
TextareaComponent.propDecorators = {
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    type: [{ type: Input }],
    hint: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LabelComponent extends AnyAppFormControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-label',
                template: `<label [for]="for">
  <ng-content></ng-content>
</label>`,
                styles: [``]
            },] },
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [
    { type: Injector }
];
LabelComponent.propDecorators = {
    for: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormDirective extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.aaCompForm != null) {
            this.aaCompForm.ngSubmit.subscribe((data) => {
                if (this.aaCompForm.valid == false) {
                    /** @type {?} */
                    var sb = this.componentsService.showMessage(this.config.errorMessages.invalidFormMessage, null);
                    sb.onAction().subscribe(x => {
                        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MESSAGE_CLICK));
                    });
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.reset == true) {
            this.aaCompForm.resetForm();
        }
    }
}
FormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aa-comp-form]'
            },] },
];
/** @nocollapse */
FormDirective.ctorParameters = () => [
    { type: Injector }
];
FormDirective.propDecorators = {
    aaCompForm: [{ type: Input }],
    reset: [{ type: Input }],
    invalidFormMessage: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoadingComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.visible = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-loading',
                template: `<mat-progress-bar *ngIf="visible" mode="indeterminate"></mat-progress-bar>`,
                styles: [``]
            },] },
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [
    { type: Injector }
];
LoadingComponent.propDecorators = {
    visible: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ErrorComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-error',
                template: `<mat-error *ngIf="errorControl && errorControl.hasError('required')">
  {{config.errorMessages.required}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('email')">
  {{config.errorMessages.email}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('pattern')">
  {{config.errorMessages.pattern}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('minLength')">
  {{config.errorMessages.minLength}}
</mat-error>
<mat-error *ngIf="errorControl && errorControl.hasError('maxLength')">
  {{config.errorMessages.maxLength}}
</mat-error>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ErrorComponent.ctorParameters = () => [
    { type: Injector }
];
ErrorComponent.propDecorators = {
    errorControl: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GenericPaginatorIntl extends MatPaginatorIntl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super();
        this.config = config;
        /**
         * A label for the range of items within the current page and the length of the whole list.
         */
        this.getRangeLabel = (page, pageSize, length) => {
            if (length == 0 || pageSize == 0) {
                return `0 ${this._of} ${length}`;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            const startIndex = page * pageSize;
            /** @type {?} */
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return `${startIndex + 1} - ${endIndex} ${this._of} ${length}`;
        };
        // set labels
        this.itemsPerPageLabel = config.locales.paginator_itemsPerPage;
        this.nextPageLabel = config.locales.paginator_nextPage;
        this.previousPageLabel = config.locales.paginator_previousPage;
        this.firstPageLabel = config.locales.paginator_firstPage;
        this.lastPageLabel = config.locales.paginator_lastPage;
        //
        this._of = config.locales.paginator_of;
    }
}
GenericPaginatorIntl.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
GenericPaginatorIntl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
];
/** @nocollapse */ GenericPaginatorIntl.ngInjectableDef = defineInjectable({ factory: function GenericPaginatorIntl_Factory() { return new GenericPaginatorIntl(inject(ANYAPP_COMPONENTS_CONFIG)); }, token: GenericPaginatorIntl, providedIn: "root" });
/**
 * @param {?} parentIntl
 * @return {?}
 */
function ANYAPP_PAGINATOR_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatPaginatorIntl();
}
/** @type {?} */
const ANYAPP_PAGINATOR_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatPaginatorIntl,
    deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
    useFactory: ANYAPP_PAGINATOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GenericSortHeaderIntl extends MatSortHeaderIntl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super();
        this.config = config;
        /**
         * ARIA label for the sorting button.
         */
        this.sortButtonLabel = (id) => {
            return `${this._sortBtnLabel} ${id}`;
        };
        // set labels
        this._sortBtnLabel = config.locales.sort_buttonLabel;
    }
}
GenericSortHeaderIntl.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
GenericSortHeaderIntl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ANYAPP_COMPONENTS_CONFIG,] }] }
];
/** @nocollapse */ GenericSortHeaderIntl.ngInjectableDef = defineInjectable({ factory: function GenericSortHeaderIntl_Factory() { return new GenericSortHeaderIntl(inject(ANYAPP_COMPONENTS_CONFIG)); }, token: GenericSortHeaderIntl, providedIn: "root" });
/**
 * @param {?} parentIntl
 * @return {?}
 */
function ANYAPP_SORT_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatSortHeaderIntl();
}
/** @type {?} */
const ANYAPP_SORT_PROVIDER = {
    // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
    provide: MatSortHeaderIntl,
    deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
    useFactory: ANYAPP_SORT_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TopMenuComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.showFace = false;
        this.showNotification = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    notificationItemClick() {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_NOTIFICATION_CLICK));
    }
    /**
     * @return {?}
     */
    faceItemClick() {
        this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_FACE_CLICK));
    }
    /**
     * @param {?} menuItem
     * @return {?}
     */
    menuItemClick(menuItem) {
        if (menuItem)
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, menuItem));
    }
}
TopMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-top-menu',
                template: `<mat-toolbar color="primary" class="mat-elevation-z6">
  <mat-toolbar-row>

    <div style="display: flex; flex:1; justify-content: space-between;">
      <div>

        <button *ngIf="sideNavRef" mat-icon-button (click)="sideNavRef.toggle()">
          <mat-icon>menu</mat-icon>
        </button>

        <span>{{title}}</span>
      </div>


      <ng-content></ng-content>


      <div>

        <button *ngIf="showNotification" (click)="notificationItemClick()" mat-icon-button>
          <mat-icon>notification_important</mat-icon>
        </button>

        <button *ngIf="showFace" (click)="faceItemClick()" mat-icon-button>
          <mat-icon>face</mat-icon>
        </button>

        <mat-menu #appMenu="matMenu">
          <button mat-menu-item *ngFor="let menuItem of menu" (click)="menuItemClick(menuItem)">{{menuItem.text}}</button>
        </mat-menu>

        <button *ngIf="menu && menu.length > 0" mat-icon-button [matMenuTriggerFor]="appMenu">
          <mat-icon>more_vert</mat-icon>
        </button>

      </div>
    </div>

  </mat-toolbar-row>
</mat-toolbar>`,
                styles: [``]
            },] },
];
/** @nocollapse */
TopMenuComponent.ctorParameters = () => [
    { type: Injector }
];
TopMenuComponent.propDecorators = {
    sideNavRef: [{ type: Input }],
    title: [{ type: Input }],
    menu: [{ type: Input }],
    showFace: [{ type: Input }],
    showNotification: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SideMenuComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        this.level = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onItemClick(model) {
        if (model)
            this.onEvent.emit(model);
    }
}
SideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-side-menu',
                template: `<div class="wrapper" [style.paddingLeft.px]="level*10">
  <div *ngFor="let item of items">
    <aa-comp-side-menu-item (onEvent)="onItemClick($event)" [item]="item" [level]="level"></aa-comp-side-menu-item>

    <div><!--[hidden]="item.children?.length == 0 || !item.expanded"-->
      <aa-comp-side-menu [items]="item.children" [level]="level+1"></aa-comp-side-menu>
    </div>
  </div>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SideMenuComponent.ctorParameters = () => [
    { type: Injector }
];
SideMenuComponent.propDecorators = {
    items: [{ type: Input }],
    level: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SideMenuItemComponent extends AnyAppBaseControl {
    /**
     * @param {?} _inject
     */
    constructor(_inject) {
        super(_inject);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    clickMenuItem() {
        if (this.item.children && this.item.children.length > 0) {
            this.item.expanded = !this.item.expanded;
        }
        if (this.item.navigateUrl != null) {
            this.onEvent.emit(new AnyAppEventModel(AnyAppEventKeys.MENU_ITEM_CLICK, this.item));
        }
    }
}
SideMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-side-menu-item',
                template: `<div *ngIf="item" (click)="clickMenuItem()">
  <button mat-button [class.sub]="level > 0">
    
    <span>{{item.text}}</span>
    
    <mat-icon *ngIf="item.children?.length > 0">
        {{item.expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}}
    </mat-icon>
  </button>
</div>`,
                styles: [`button{width:100%;text-align:left}button:not(.sub) span{text-transform:uppercase}mat-icon{position:absolute;top:0;right:0;margin:4px}.sub{font-weight:400}`]
            },] },
];
/** @nocollapse */
SideMenuItemComponent.ctorParameters = () => [
    { type: Injector }
];
SideMenuItemComponent.propDecorators = {
    item: [{ type: Input }],
    level: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ComponentsModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
                    provide: MatPaginatorIntl,
                    useClass: GenericPaginatorIntl,
                    deps: [ANYAPP_COMPONENTS_CONFIG]
                },
                {
                    provide: MatSortHeaderIntl,
                    useClass: GenericSortHeaderIntl,
                    deps: [ANYAPP_COMPONENTS_CONFIG]
                }]
        };
    }
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    BrowserAnimationsModule,
                    MatButtonModule,
                    MatIconModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatToolbarModule,
                    MatMenuModule,
                    MatIconModule,
                    MatProgressBarModule,
                    MatCheckboxModule,
                    MatSlideToggleModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatSliderModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatInputModule
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
                    MatSidenavModule, MatToolbarModule
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AnyAppEventModel, AnyAppMenuItem, AnyAppTreeModel, AnyAppEventKeys, ANYAPP_COMPONENTS_CONFIG, TableSelectEnum, ComponentsService, ComponentsModule, ButtonComponent, CheckboxComponent, MY_FORMATS, DatepickerComponent, FormDirective, IconComponent, InputComponent, LabelComponent, LoadingComponent, SelectComponent, SliderComponent, TableComponent, TextareaComponent, ErrorComponent, TopMenuComponent, SideMenuComponent, AnyAppBaseControl as ɵa, AnyAppFormControl as ɵc, AnyAppModelControl as ɵb, SideMenuItemComponent as ɵd, GenericPaginatorIntl as ɵe, GenericSortHeaderIntl as ɵf };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55YXBwLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvY29tcG9uZW50cy5tb2RlbC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9jb21wb25lbnRzLmNvbmZpZy50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9jb21wb25lbnRzLnNlcnZpY2UudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvYmFzZS1jb250cm9sLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3V0aWwudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvZm9ybS1jb250cm9sLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9lcnJvci1zdGF0ZS1tYXRjaGVyLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL21vZGVsLWNvbnRyb2wudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9mb3JtL2Zvcm0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3BhZ2luYXRvci5pbnRsLnRzIiwibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvbGliL3RhYmxlL3NvcnQuaW50bC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi90b3AtbWVudS90b3AtbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BhbnlhcHAvY29tcG9uZW50cy9saWIvc2lkZS1tZW51L3NpZGUtbWVudS1pdGVtL3NpZGUtbWVudS1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGFueWFwcC9jb21wb25lbnRzL2xpYi9jb21wb25lbnRzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW55QXBwRXZlbnRNb2RlbDxUID0ge30+IHtcclxuXHRrZXk6IEFueUFwcEV2ZW50S2V5cztcclxuXHR2YWx1ZT86IFQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGtleTogQW55QXBwRXZlbnRLZXlzLCB2YWx1ZT86IFQpIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFueUFwcE1lbnVJdGVtIHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0a2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbnlBcHBUcmVlTW9kZWwge1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaGlsZHJlbjogQW55QXBwVHJlZU1vZGVsW107XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBleHBhbmRlZD86Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBuYXZpZ2F0ZVVybD86IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjaGlsZHJlbj86IEFueUFwcFRyZWVNb2RlbFtdLCBleHBhbmRlZD86IGJvb2xlYW4sIG5hdmlnYXRlVXJsPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlVXJsID0gbmF2aWdhdGVVcmw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZSgpe1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQW55QXBwRXZlbnRLZXlzIHtcclxuXHRNRVNTQUdFX0NMSUNLID0gMSxcclxuXHRNRU5VX0lURU1fQ0xJQ0sgPSAyLFxyXG5cdE1FTlVfRkFDRV9DTElDSyA9IDMsXHJcblx0TUVOVV9OT1RJRklDQVRJT05fQ0xJQ0sgPSA0LFxyXG59IiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbnlBcHBDb21wb25lbnRzQ29uZmlnPignYW55YXBwLWRlZmF1bHQtY29tcG9uZW50cy1vcHRpb25zJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFueUFwcENvbXBvbmVudHNDb25maWcge1xyXG5cdG1lc3NhZ2VEdXJhdGlvbjogbnVtYmVyO1xyXG5cdGxvY2FsZTogc3RyaW5nO1xyXG5cdC8vXHJcblx0ZXJyb3JNZXNzYWdlczogQW55QXBwRXJyb3JNZXNzYWdlcztcclxuXHRsb2NhbGVzOiBBbnlBcHBMb2NhbGVzO1xyXG5cdC8vXHJcblx0YnV0dG9uQ29uZmlnOiBBbnlBcHBCdXR0b25Db25maWc7XHJcblx0Zm9ybUNvbmZpZzogQW55QXBwRm9ybUNvbmZpZztcclxuXHR0YWJsZUNvbmZpZzogQW55QXBwVGFibGVDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwQnV0dG9uQ29uZmlnIHtcclxuXHRidXR0b25UaW1lb3V0VGhyZXNob2xkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwRm9ybUNvbmZpZyB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwVGFibGVDb25maWcge1xyXG5cdHBhZ2VTaXplOiBudW1iZXI7XHJcblx0c2VsZWN0T3B0aW9uOiBUYWJsZVNlbGVjdEVudW07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW55QXBwRXJyb3JNZXNzYWdlcyB7XHJcblx0cmVxdWlyZWQ6IHN0cmluZztcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdHBhdHRlcm46IHN0cmluZztcclxuXHRtaW5MZW5ndGg6IHN0cmluZztcclxuXHRtYXhMZW5ndGg6IHN0cmluZztcclxuXHRpbnZhbGlkRm9ybU1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbnlBcHBMb2NhbGVzIHtcclxuXHRwYWdpbmF0b3JfZmlyc3RQYWdlOiBzdHJpbmc7XHJcblx0cGFnaW5hdG9yX2xhc3RQYWdlOiBzdHJpbmc7XHJcblx0cGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9vZjogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9uZXh0UGFnZTogc3RyaW5nO1xyXG5cdHBhZ2luYXRvcl9wcmV2aW91c1BhZ2U6IHN0cmluZztcclxuXHJcblx0c29ydF9idXR0b25MYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUYWJsZVNlbGVjdEVudW0ge1xyXG5cdE5vU2VsZWN0ID0gMCxcclxuXHRTaW5nbGVTZWxlY3QgPSAxLFxyXG5cdE11bHRpU2VsZWN0ID0gMixcclxufSIsImltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZywgTWF0U25hY2tCYXJSZWYsIFNpbXBsZVNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcsIEFueUFwcENvbXBvbmVudHNDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudHMuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c1NlcnZpY2UgeyAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQW55QXBwQ29tcG9uZW50c0NvbmZpZyxcbiAgICBwcml2YXRlIF9zbmFja2JhcjogTWF0U25hY2tCYXIpIHsgXG4gIH1cblxuICBwdWJsaWMgc2hvd01lc3NhZ2UobWVzc2FnZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZykgOiBNYXRTbmFja0JhclJlZjxTaW1wbGVTbmFja0Jhcj4ge1xuICAgIHJldHVybiB0aGlzLl9zbmFja2Jhci5vcGVuKG1lc3NhZ2UsIGFjdGlvbiwgPE1hdFNuYWNrQmFyQ29uZmlnPntcbiAgICAgIGR1cmF0aW9uOiB0aGlzLmNvbmZpZy5tZXNzYWdlRHVyYXRpb25cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIEluamVjdG9yLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFueUFwcENvbXBvbmVudHNDb25maWcsIEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gXCIuL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudHNTZXJ2aWNlIH0gZnJvbSBcIi4vY29tcG9uZW50cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFueUFwcEV2ZW50TW9kZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW55QXBwQmFzZUNvbnRyb2wge1xyXG4gIEBPdXRwdXQoKSBvbkV2ZW50OiBFdmVudEVtaXR0ZXI8QW55QXBwRXZlbnRNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPEFueUFwcEV2ZW50TW9kZWw+KCk7XHJcbiAgXHJcbiAgY29uZmlnOiBBbnlBcHBDb21wb25lbnRzQ29uZmlnO1xyXG4gIGNvbXBvbmVudHNTZXJ2aWNlOiBDb21wb25lbnRzU2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IF9pbmplY3Rvci5nZXQoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKTtcclxuICAgIHRoaXMuY29tcG9uZW50c1NlcnZpY2UgPSBfaW5qZWN0b3IuZ2V0KENvbXBvbmVudHNTZXJ2aWNlKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNSZXF1aXJlZEZpZWxkID0gKGFic3RyYWN0Q29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoYWJzdHJhY3RDb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IGFic3RyYWN0Q29udHJvbC52YWxpZGF0b3Ioe31hcyBBYnN0cmFjdENvbnRyb2wpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhYnN0cmFjdENvbnRyb2xbJ2NvbnRyb2xzJ10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2xOYW1lIGluIGFic3RyYWN0Q29udHJvbFsnY29udHJvbHMnXSkge1xyXG4gICAgICAgICAgICBpZiAoYWJzdHJhY3RDb250cm9sWydjb250cm9scyddW2NvbnRyb2xOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1JlcXVpcmVkRmllbGQoYWJzdHJhY3RDb250cm9sWydjb250cm9scyddW2NvbnRyb2xOYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTsiLCJpbXBvcnQgeyBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFueUFwcENvbXBvbmVudHNDb25maWcsIEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gXCIuL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSBcIi4vYmFzZS1jb250cm9sXCI7XHJcbmltcG9ydCB7IGhhc1JlcXVpcmVkRmllbGQgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW55QXBwRm9ybUNvbnRyb2wgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCB7XHJcbiAgQElucHV0KCkgZm9ybTogTmdGb3JtOyAvLyBmb3JtIGNvbnRhaW5zIGZvcm1ncm91cFxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBoYXNSZXF1aXJlZEZpZWxkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZUZvcm0oKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbE5hbWUpIHsgLy8gbmFtZSA9IHNldFxyXG4gICAgICBpZiAodGhpcy5mb3JtQ29udHJvbCA9PSBudWxsKSB7IC8vIGZjIGlzIG5vdCBzZXRcclxuICAgICAgICBpZiAodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5mb3JtKSB7IC8vIGZpbmQgY29udHJvbCBhbmQgc2V0XHJcbiAgICAgICAgICB0aGlzLmZvcm1Db250cm9sID0gdGhpcy5mb3JtLmZvcm0uY29udHJvbHNbdGhpcy5mb3JtQ29udHJvbE5hbWVdIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuZm9ybUNvbnRyb2wpIHtcclxuICAgICAgdGhpcy5oYXNSZXF1aXJlZEZpZWxkID0gaGFzUmVxdWlyZWRGaWVsZCh0aGlzLmZvcm1Db250cm9sKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBGb3JtQ29udHJvbCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzdHlsZVwiPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidyYWlzZWQnXCIgbWF0LXJhaXNlZC1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3N0cm9rZWQnXCIgbWF0LXN0cm9rZWQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoQ2FzZT1cIidmbGF0J1wiIG1hdC1mbGF0LWJ1dHRvbiBbdHlwZV09XCJ0eXBlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2NvbG9yXT1cImNvbG9yXCI+PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRyYW5zY2x1ZGVcIj48L25nLWNvbnRhaW5lcj48L2J1dHRvbj5cbiAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiICpuZ1N3aXRjaENhc2U9XCInaWNvbidcIiBtYXQtaWNvbi1idXR0b24gW3R5cGVdPVwidHlwZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjb2xvcl09XCJjb2xvclwiPjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0cmFuc2NsdWRlXCI+PC9uZy1jb250YWluZXI+PC9idXR0b24+XG4gIDxidXR0b24gaWQ9XCJidXR0b25cIiAqbmdTd2l0Y2hDYXNlPVwiJ2ZhYidcIiBtYXQtZmFiIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgKm5nU3dpdGNoRGVmYXVsdCBtYXQtYnV0dG9uIFt0eXBlXT1cInR5cGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY29sb3JdPVwiY29sb3JcIj48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidHJhbnNjbHVkZVwiPjwvbmctY29udGFpbmVyPjwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjdHJhbnNjbHVkZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwRm9ybUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aW1lb3V0OiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnYnV0dG9uJztcblxuICBASW5wdXQoKSBzdHlsZTogJ2RlZmF1bHQnIHwgJ3JhaXNlZCcgfCAnc3Ryb2tlZCcgfCAnZmxhdCcgfCAnaWNvbicgfCAnZmFiJyA9ICdmbGF0J1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHN1Ym1pdEF0dGFjaGVkRm9ybShldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5mb3JtICE9IG51bGwgJiYgdGhpcy50eXBlID09IFwiYnV0dG9uXCIpIHsgLy8gaWYgZm9ybSBpcyBzZXQgYW5kIHR5cGUgaXMgYnV0dG9uXG4gICAgICB0aGlzLmZvcm0ub25TdWJtaXQoZXZlbnQpOyAvLyB0aGlzIHdpbGwgYWxzbyB1cGRhdGUgdGhlIHN1Ym1pdHRlZCBzdGF0ZVxuICAgICAgLy90aGlzLmZvcm0ubmdTdWJtaXQubmV4dCh0cnVlKTtcbiAgICAgIC8vdGhpcy5mb3JtLm5nU3VibWl0LmVtaXQoZXZlbnQpO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSBhIHVzZXIgY2FuIG5vdCBjbGljayB0aGUgYnV0dG9uIG11bHRpcGxlIHRpbWVzIHdpdGhpbiBhIGxpbWl0ZWQgdGltZVxuICAgIHRoaXMuaGFuZGxlQnV0dG9uVGltZW91dFRyZXNob2xkKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJ1dHRvblRpbWVvdXRUcmVzaG9sZCgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2V0RGlzYWJsZWQobnVsbCk7IH0sIHRoaXMuY29uZmlnLmJ1dHRvbkNvbmZpZy5idXR0b25UaW1lb3V0VGhyZXNob2xkKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZGlzYWJsZWQpXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bXCJidXR0b25cIl0sIFwiZGlzYWJsZWRcIiwgZGlzYWJsZWQudG9TdHJpbmcoKSk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW1wiYnV0dG9uXCJdLCBcImRpc2FibGVkXCIpO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRQYWdpbmF0b3IsIE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhbGxvd1NlbGVjdFwiIG1hdENvbHVtbkRlZj1cInNlbGVjdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiYWxsb3dNdWx0aVNlbGVjdFwiIChjaGFuZ2UpPVwiJGV2ZW50ID8gbWFzdGVyVG9nZ2xlKCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgIWlzQWxsU2VsZWN0ZWQoKVwiPlxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1uc1wiIFttYXRDb2x1bW5EZWZdPVwiY29sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IHt7Y29sfX0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbY29sXX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBjb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuXG48bWF0LXBhZ2luYXRvciBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+YCxcbiAgc3R5bGVzOiBbYHRhYmxle3dpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vXG4gIC8vIG1hbmRhdG9yeVxuICAvLyAgXG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBzdHJpbmdbXTtcbiAgLy9cbiAgLy8gTm90IG1hbmRhdG9yeVxuICAvL1xuICBASW5wdXQoKSBhbGxvd1NvcnQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhbGxvd1BhZ2luZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXIgPSA1MDtcbiAgQElucHV0KCkgYWxsb3dTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dNdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgc2VsZWN0aW9uOiBTZWxlY3Rpb25Nb2RlbDxhbnk+O1xuXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHsgXG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLmRhdGEpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odGhpcy5hbGxvd011bHRpU2VsZWN0LCBbXSk7XG4gICAgXG4gICAgaWYodGhpcy5hbGxvd1BhZ2luZykge1xuICAgICAgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUgPSB0aGlzLnBhZ2VTaXplO1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIH1cblxuICAgIGlmKHRoaXMuYWxsb3dTb3J0KVxuICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09IG51bVJvd3M7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbnlBcHBFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcclxuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc1N1Ym1pdHRlZCA9IGZvcm0gJiYgZm9ybS5zdWJtaXR0ZWQ7XHJcbiAgICB2YXIgcmV0dXJuVmFsID0gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkIHx8IGlzU3VibWl0dGVkKSk7XHJcbiAgICByZXR1cm4gcmV0dXJuVmFsO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEFueUFwcEZvcm1Db250cm9sIH0gZnJvbSBcIi4vZm9ybS1jb250cm9sXCI7XHJcbmltcG9ydCB7IEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW55QXBwRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tIFwiLi9lcnJvci1zdGF0ZS1tYXRjaGVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW55QXBwTW9kZWxDb250cm9sIGV4dGVuZHMgQW55QXBwRm9ybUNvbnRyb2wge1xyXG5cdHByaXZhdGUgX2lubmVyVmFsdWU6IGFueSA9IG51bGw7XHJcblx0bWF0Y2hlcjogQW55QXBwRXJyb3JTdGF0ZU1hdGNoZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHN1cGVyKF9pbmplY3Rvcik7XHJcblx0XHR0aGlzLm1hdGNoZXIgPSBuZXcgQW55QXBwRXJyb3JTdGF0ZU1hdGNoZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldCBpbm5lclZhbHVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lubmVyVmFsdWU7XHJcblx0fVxyXG5cdHNldCBpbm5lclZhbHVlKHZhbCkge1xyXG5cdFx0dGhpcy5faW5uZXJWYWx1ZSA9IHZhbDtcclxuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMuX2lubmVyVmFsdWUpO1xyXG5cdH1cclxuXHRcclxuXHRvbk1vZGVsQ2hhbmdlKGV2ZW50KSB7XHJcblx0XHRpZiAodGhpcy5faW5uZXJWYWx1ZSAhPSBldmVudCkge1xyXG5cdFx0XHR0aGlzLmlubmVyVmFsdWUgPSBldmVudDsgLy8gdXBkYXRlIG9ubHkgaWYgY2hhbmdlZFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gZ2V0cyBjYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBpbml0aWFsaXplZCAod3JpdGUgdG8gdmlldylcclxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuXHRcdGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuX2lubmVyVmFsdWUgPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHByb3BhZ2F0ZSB0aGUgbmV3IHZhbHVlIHRvIHRoZSBvdXRzaWRlIHdvcmxkXHJcblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG5cclxuXHQvLyBoYXMgYWNjZXNzIHRvIGEgZnVuY3Rpb24gdGhhdCBpbmZvcm1zIHRoZSBvdXRzaWRlIHdvcmxkIGFib3V0IGNoYW5nZXNcclxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XHJcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG5cdH1cclxuXHJcblx0Ly8gcmVnaXN0ZXJzIGEgY2FsbGJhY2sgdGhhdCBpcyBleGN1dGVkIHdoZW5ldmVyIGEgZm9ybSBjb250cm9sIGlzIMOiwoDCnHRvdWNoZWTDosKAwp1cclxuXHRyZWdpc3Rlck9uVG91Y2hlZCgpIHsgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQW55QXBwTW9kZWxDb250cm9sIH0gZnJvbSAnLi4vbW9kZWwtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtaW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAge3tsYWJlbH19XG48L2FhLWNvbXAtbGFiZWw+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiICNpbnB1dCBbdHlwZV09XCJ0eXBlXCIgWyhuZ01vZGVsKV09XCJpbm5lclZhbHVlXCIgXG4gICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cblxuICA8bWF0LWhpbnQgYWxpZ249XCJzdGFydFwiICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cbiAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCIgKm5nSWY9XCJtYXhMZW5ndGhcIj57e2lucHV0LnZhbHVlLmxlbmd0aH19IC8ge3ttYXhMZW5ndGh9fTwvbWF0LWhpbnQ+XG5cbiAgXG4gIDxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+XG5cbjwvbWF0LWZvcm0tZmllbGQ+XG48IS0tW2Zvcm1Db250cm9sXT1cImZvcm0/LmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV1cIi0tPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHsgIFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBcInRleHRcIjtcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBmb3J3YXJkUmVmLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiIXNsaWRlVG9nZ2xlXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIj5cbiAgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG48L21hdC1jaGVja2JveD5cblxuPG1hdC1zbGlkZS10b2dnbGUgKm5nSWY9XCJzbGlkZVRvZ2dsZVwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICAgIHt7bGFiZWx9fVxuICA8L2FhLWNvbXAtbGFiZWw+XG48L21hdC1zbGlkZS10b2dnbGU+XG5cbjxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IFxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIC8vQW5ndWxhciBpbnRlcm5hbHkgaW5qZWN0cyBhbGwgdmFsdWVzIHRoYXQgYXJlIHJlZ2lzdGVyZWQgb24gdGhlIE5HX1ZBTFVFX0FDQ0VTU09SIHRva2VuXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFBvc2l0aW9uOiAnYmVmb3JlJyB8ICdhZnRlcicgPSAnYWZ0ZXInO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsaWRlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgZm9yd2FyZFJlZiwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcE1vZGVsQ29udHJvbCB9IGZyb20gJy4uL21vZGVsLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LXNlbGVjdCAqbmdJZj1cIiFtdWx0aXBsZVwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiICNpbnB1dCBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nSWY9XCJoYXNSZXF1aXJlZEZpZWxkID09IGZhbHNlXCI+TWFhayBlZW4ga2V1emU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiBbdmFsdWVdPVwidmFsdWVGaWVsZCAhPSBudWxsID8gaXRlbVt2YWx1ZUZpZWxkXSA6IGl0ZW1cIj57e3RleHRGaWVsZCAhPSBudWxsID8gaXRlbVt0ZXh0RmllbGRdIDogaXRlbX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIFxuICA8bWF0LXNlbGVjdCAqbmdJZj1cIm11bHRpcGxlXCIgbXVsdGlwbGUgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdJZj1cImhhc1JlcXVpcmVkRmllbGQgPT0gZmFsc2VcIj5NYWFrIGVlbiBrZXV6ZTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIFt2YWx1ZV09XCJ2YWx1ZUZpZWxkICE9IG51bGwgPyBpdGVtW3ZhbHVlRmllbGRdIDogaXRlbVwiPnt7dGV4dEZpZWxkICE9IG51bGwgPyBpdGVtW3RleHRGaWVsZF0gOiBpdGVtfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cblxuICA8bWF0LWhpbnQgKm5nSWY9XCJoaW50XCI+e3toaW50fX08L21hdC1oaW50PlxuICBcbiAgXG48L21hdC1mb3JtLWZpZWxkPlxuPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtczogYW55W107XG4gIEBJbnB1dCgpIHZhbHVlRmllbGQ6IHN0cmluZyA9IFwiaWRcIjtcbiAgQElucHV0KCkgdGV4dEZpZWxkOiBzdHJpbmcgPSBcInRleHRcIjtcblxuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIGZvcndhcmRSZWYsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHJvbGx1cCBpcyB1c2VkLCBtb21lbnQgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgZGlmZmVyZW50bHkuXG4vLyBTaW5jZSBNb21lbnQuanMgZG9lc24ndCBoYXZlIGEgZGVmYXVsdCBleHBvcnQsIHdlIG5vcm1hbGx5IG5lZWQgdG8gaW1wb3J0IHVzaW5nIHRoZSBgKiBhc2Bcbi8vIHN5bnRheC4gSG93ZXZlciwgcm9sbHVwIGNyZWF0ZXMgYSBzeW50aGV0aWMgZGVmYXVsdCBtb2R1bGUgYW5kIHdlIHRodXMgbmVlZCB0byBpbXBvcnQgaXQgdXNpbmdcbi8vIHRoZSBgZGVmYXVsdCBhc2Agc3ludGF4LlxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHLCBBbnlBcHBDb21wb25lbnRzQ29uZmlnIH0gZnJvbSAnLi4vY29tcG9uZW50cy5jb25maWcnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWR1cGxpY2F0ZS1pbXBvcnRzXG4vL2ltcG9ydCB7ZGVmYXVsdCBhcyBfcm9sbHVwTW9tZW50fSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSAvKl9yb2xsdXBNb21lbnQgfHwqLyBfbW9tZW50O1xuXG4vLyBTZWUgdGhlIE1vbWVudC5qcyBkb2NzIGZvciB0aGUgbWVhbmluZyBvZiB0aGVzZSBmb3JtYXRzOlxuLy8gaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiAnTEwnLFxuICAgIG1vbnRoWWVhckxhYmVsOiAnTU1NIFlZWVknLFxuICAgIGRhdGVBMTF5TGFiZWw6ICdMTCcsXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtZGF0ZXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG5cbiAgPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cblxuXG4gIDxhYS1jb21wLWVycm9yIFtlcnJvckNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIj48L2FhLWNvbXAtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPmAsXG4gIHN0eWxlczogW2BgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCAvL0FuZ3VsYXIgaW50ZXJuYWx5IGluamVjdHMgYWxsIHZhbHVlcyB0aGF0IGFyZSByZWdpc3RlcmVkIG9uIHRoZSBOR19WQUxVRV9BQ0NFU1NPUiB0b2tlblxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZXBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmcgYE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXJcbiAgICAvLyBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mXG4gICAgLy8gb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFN9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHsgIFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+KSB7XG4gICAgc3VwZXIoX2luamVjdG9yKTtcblxuICAgIHRoaXMubG9jYWxlID0gdGhpcy5jb25maWcubG9jYWxlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGZvcndhcmRSZWYsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYDxhYS1jb21wLWxhYmVsICpuZ0lmPVwibGFiZWxcIj5cbiAgICB7e2xhYmVsfX1cbiAgPC9hYS1jb21wLWxhYmVsPlxuICBcbjxtYXQtc2xpZGVyIFttaW5dPVwibWluXCIgW21heF09XCJtYXhcIiBbc3RlcF09XCJzdGVwXCIgI2lucHV0IFsobmdNb2RlbCldPVwiaW5uZXJWYWx1ZVwiIFxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L21hdC1zbGlkZXI+XG5cbjxtYXQtaGludCAqbmdJZj1cImhpbnRcIj57e2hpbnR9fTwvbWF0LWhpbnQ+XG5cblxuPGFhLWNvbXAtZXJyb3IgW2Vycm9yQ29udHJvbF09XCJmb3JtQ29udHJvbFwiPjwvYWEtY29tcC1lcnJvcj5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgLy9Bbmd1bGFyIGludGVybmFseSBpbmplY3RzIGFsbCB2YWx1ZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZCBvbiB0aGUgTkdfVkFMVUVfQUNDRVNTT1IgdG9rZW5cbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBBbnlBcHBNb2RlbENvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEZvcm1Db250cm9sIH0gZnJvbSAnLi4vZm9ybS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1pY29uJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWljb24gW2NvbG9yXT1cImNvbG9yXCIgW2lubGluZV09XCJpbmxpbmVcIj57e2ljb259fTwvbWF0LWljb24+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIEFueUFwcEZvcm1Db250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbmxpbmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBNb2RlbENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbC1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC10ZXh0YXJlYScsXG4gIHRlbXBsYXRlOiBgPGFhLWNvbXAtbGFiZWwgKm5nSWY9XCJsYWJlbFwiPlxuICB7e2xhYmVsfX1cbjwvYWEtY29tcC1sYWJlbD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8dGV4dGFyZWEgbWF0SW5wdXQgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgI2lucHV0IFt0eXBlXT1cInR5cGVcIiBbKG5nTW9kZWwpXT1cImlubmVyVmFsdWVcIiBcbiAgICBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvdGV4dGFyZWE+XG5cbiAgPG1hdC1oaW50ICpuZ0lmPVwiaGludFwiPnt7aGludH19PC9tYXQtaGludD5cbiAgXG48YWEtY29tcC1lcnJvciBbZXJyb3JDb250cm9sXT1cImZvcm1Db250cm9sXCI+PC9hYS1jb21wLWVycm9yPlxuXG48L21hdC1mb3JtLWZpZWxkPlxuPCEtLVtmb3JtQ29udHJvbF09XCJmb3JtPy5jb250cm9sc1tmb3JtQ29udHJvbE5hbWVdXCItLT5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZXh0YXJlYUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBleHRlbmRzIEFueUFwcE1vZGVsQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgeyAgXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9IFwidGV4dFwiO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBGb3JtQ29udHJvbCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtbGFiZWwnLFxuICB0ZW1wbGF0ZTogYDxsYWJlbCBbZm9yXT1cImZvclwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBleHRlbmRzIEFueUFwcEZvcm1Db250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9yOiBzdHJpbmc7XG4gIFxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25DaGFuZ2VzLCBJbnB1dCwgSW5qZWN0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcEV2ZW50S2V5cyB9IGZyb20gJy4uL2NvbXBvbmVudHMubW9kZWwnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWEtY29tcC1mb3JtXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybURpcmVjdGl2ZSBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBhYUNvbXBGb3JtOiBOZ0Zvcm07XG4gIEBJbnB1dCgpIHJlc2V0OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZhbGlkRm9ybU1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYodGhpcy5hYUNvbXBGb3JtICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYWFDb21wRm9ybS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYodGhpcy5hYUNvbXBGb3JtLnZhbGlkID09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIHNiID0gdGhpcy5jb21wb25lbnRzU2VydmljZS5zaG93TWVzc2FnZSh0aGlzLmNvbmZpZy5lcnJvck1lc3NhZ2VzLmludmFsaWRGb3JtTWVzc2FnZSwgbnVsbCk7XG4gICAgICAgICAgc2Iub25BY3Rpb24oKS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRXZlbnQuZW1pdChuZXcgQW55QXBwRXZlbnRNb2RlbChBbnlBcHBFdmVudEtleXMuTUVTU0FHRV9DTElDSykpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZih0aGlzLnJlc2V0ID09IHRydWUpIHtcbiAgICAgIHRoaXMuYWFDb21wRm9ybS5yZXNldEZvcm0oKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFueUFwcEJhc2VDb250cm9sIH0gZnJvbSAnLi4vYmFzZS1jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1sb2FkaW5nJyxcbiAgdGVtcGxhdGU6IGA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj1cInZpc2libGVcIiBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtZXJyb3InLFxuICB0ZW1wbGF0ZTogYDxtYXQtZXJyb3IgKm5nSWY9XCJlcnJvckNvbnRyb2wgJiYgZXJyb3JDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+XG4gIHt7Y29uZmlnLmVycm9yTWVzc2FnZXMucmVxdWlyZWR9fVxuPC9tYXQtZXJyb3I+XG48bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcignZW1haWwnKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLmVtYWlsfX1cbjwvbWF0LWVycm9yPlxuPG1hdC1lcnJvciAqbmdJZj1cImVycm9yQ29udHJvbCAmJiBlcnJvckNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKVwiPlxuICB7e2NvbmZpZy5lcnJvck1lc3NhZ2VzLnBhdHRlcm59fVxuPC9tYXQtZXJyb3I+XG48bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcignbWluTGVuZ3RoJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5taW5MZW5ndGh9fVxuPC9tYXQtZXJyb3I+XG48bWF0LWVycm9yICpuZ0lmPVwiZXJyb3JDb250cm9sICYmIGVycm9yQ29udHJvbC5oYXNFcnJvcignbWF4TGVuZ3RoJylcIj5cbiAge3tjb25maWcuZXJyb3JNZXNzYWdlcy5tYXhMZW5ndGh9fVxuPC9tYXQtZXJyb3I+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQgeyAgXG4gIEBJbnB1dCgpIGVycm9yQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCAgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFueUFwcENvbXBvbmVudHNDb25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VuZXJpY1BhZ2luYXRvckludGwgZXh0ZW5kcyBNYXRQYWdpbmF0b3JJbnRsIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogQW55QXBwQ29tcG9uZW50c0NvbmZpZykge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cclxuXHRcdFx0Ly8gc2V0IGxhYmVsc1xyXG5cdFx0XHR0aGlzLml0ZW1zUGVyUGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTtcclxuXHRcdFx0dGhpcy5uZXh0UGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX25leHRQYWdlO1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzUGFnZUxhYmVsID0gY29uZmlnLmxvY2FsZXMucGFnaW5hdG9yX3ByZXZpb3VzUGFnZTtcclxuXHRcdFx0dGhpcy5maXJzdFBhZ2VMYWJlbCA9IGNvbmZpZy5sb2NhbGVzLnBhZ2luYXRvcl9maXJzdFBhZ2U7XHJcblx0XHRcdHRoaXMubGFzdFBhZ2VMYWJlbCA9IGNvbmZpZy5sb2NhbGVzLnBhZ2luYXRvcl9sYXN0UGFnZTtcclxuXHRcdFx0Ly9cclxuXHRcdFx0dGhpcy5fb2YgPSBjb25maWcubG9jYWxlcy5wYWdpbmF0b3Jfb2Y7XHJcblx0XHR9XHJcblx0XHJcblx0cHJpdmF0ZSBfb2Y6IHN0cmluZztcclxuXHRcclxuXHQvKiogQSBsYWJlbCBmb3IgdGhlIHJhbmdlIG9mIGl0ZW1zIHdpdGhpbiB0aGUgY3VycmVudCBwYWdlIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSB3aG9sZSBsaXN0LiAqL1xyXG4gIGdldFJhbmdlTGFiZWwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKGxlbmd0aCA9PSAwIHx8IHBhZ2VTaXplID09IDApIHsgcmV0dXJuIGAwICR7dGhpcy5fb2Z9ICR7bGVuZ3RofWA7IH1cclxuXHJcbiAgICBsZW5ndGggPSBNYXRoLm1heChsZW5ndGgsIDApO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XHJcblxyXG4gICAgLy8gSWYgdGhlIHN0YXJ0IGluZGV4IGV4Y2VlZHMgdGhlIGxpc3QgbGVuZ3RoLCBkbyBub3QgdHJ5IGFuZCBmaXggdGhlIGVuZCBpbmRleCB0byB0aGUgZW5kLlxyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID9cclxuICAgICAgICBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUsIGxlbmd0aCkgOlxyXG4gICAgICAgIHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcclxuXHJcbiAgICByZXR1cm4gYCR7c3RhcnRJbmRleCArIDF9IC0gJHtlbmRJbmRleH0gJHt0aGlzLl9vZn0gJHtsZW5ndGh9YDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50SW50bDogTWF0UGFnaW5hdG9ySW50bCkge1xyXG4gIHJldHVybiBwYXJlbnRJbnRsIHx8IG5ldyBNYXRQYWdpbmF0b3JJbnRsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSID0ge1xyXG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTWF0UGFnaW5hdG9ySW50bCBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxyXG4gIHByb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsXHJcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE1hdFBhZ2luYXRvckludGxdXSxcclxuICB1c2VGYWN0b3J5OiBBTllBUFBfUEFHSU5BVE9SX1BST1ZJREVSX0ZBQ1RPUllcclxufTsiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdFNvcnRIZWFkZXJJbnRsICB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy5jb25maWdcIjtcclxuaW1wb3J0IHsgQW55QXBwQ29tcG9uZW50c0NvbmZpZyB9IGZyb20gXCIuLi9jb21wb25lbnRzLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmljU29ydEhlYWRlckludGwgZXh0ZW5kcyBNYXRTb3J0SGVhZGVySW50bCB7XHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEFueUFwcENvbXBvbmVudHNDb25maWcpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHJcblx0XHRcdC8vIHNldCBsYWJlbHNcclxuXHRcdFx0dGhpcy5fc29ydEJ0bkxhYmVsID0gY29uZmlnLmxvY2FsZXMuc29ydF9idXR0b25MYWJlbDtcclxuXHRcdH1cclxuXHRcclxuXHRwcml2YXRlIF9zb3J0QnRuTGFiZWw6IHN0cmluZztcclxuXHRcclxuXHQvKiogQVJJQSBsYWJlbCBmb3IgdGhlIHNvcnRpbmcgYnV0dG9uLiAqL1xyXG4gIHNvcnRCdXR0b25MYWJlbCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5fc29ydEJ0bkxhYmVsfSAke2lkfWA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQU5ZQVBQX1NPUlRfUFJPVklERVJfRkFDVE9SWShwYXJlbnRJbnRsOiBNYXRTb3J0SGVhZGVySW50bCkge1xyXG4gIHJldHVybiBwYXJlbnRJbnRsIHx8IG5ldyBNYXRTb3J0SGVhZGVySW50bCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQU5ZQVBQX1NPUlRfUFJPVklERVIgPSB7XHJcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBNYXRQYWdpbmF0b3JJbnRsIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXHJcbiAgcHJvdmlkZTogTWF0U29ydEhlYWRlckludGwsXHJcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE1hdFNvcnRIZWFkZXJJbnRsXV0sXHJcbiAgdXNlRmFjdG9yeTogQU5ZQVBQX1NPUlRfUFJPVklERVJfRkFDVE9SWVxyXG59OyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0b3IsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5pbXBvcnQgeyBBbnlBcHBNZW51SXRlbSwgQW55QXBwRXZlbnRNb2RlbCwgQW55QXBwRXZlbnRLZXlzIH0gZnJvbSAnLi4vY29tcG9uZW50cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtdG9wLW1lbnUnLFxuICB0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejZcIj5cbiAgPG1hdC10b29sYmFyLXJvdz5cblxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4OjE7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIj5cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNpZGVOYXZSZWZcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNpZGVOYXZSZWYudG9nZ2xlKClcIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG93Tm90aWZpY2F0aW9uXCIgKGNsaWNrKT1cIm5vdGlmaWNhdGlvbkl0ZW1DbGljaygpXCIgbWF0LWljb24tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25faW1wb3J0YW50PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInNob3dGYWNlXCIgKGNsaWNrKT1cImZhY2VJdGVtQ2xpY2soKVwiIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LWljb24+ZmFjZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxtYXQtbWVudSAjYXBwTWVudT1cIm1hdE1lbnVcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IG1lbnVJdGVtIG9mIG1lbnVcIiAoY2xpY2spPVwibWVudUl0ZW1DbGljayhtZW51SXRlbSlcIj57e21lbnVJdGVtLnRleHR9fTwvYnV0dG9uPlxuICAgICAgICA8L21hdC1tZW51PlxuXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJtZW51ICYmIG1lbnUubGVuZ3RoID4gMFwiIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwiYXBwTWVudVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BNZW51Q29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICBcbiAgQElucHV0KCkgc2lkZU5hdlJlZjogYW55O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG1lbnU6IEFueUFwcE1lbnVJdGVtW107XG4gIEBJbnB1dCgpIHNob3dGYWNlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dOb3RpZmljYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbm90aWZpY2F0aW9uSXRlbUNsaWNrKCkge1xuICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsKEFueUFwcEV2ZW50S2V5cy5NRU5VX05PVElGSUNBVElPTl9DTElDSykpO1xuICB9IFxuXG4gIGZhY2VJdGVtQ2xpY2soKSB7XG4gICAgICB0aGlzLm9uRXZlbnQuZW1pdChuZXcgQW55QXBwRXZlbnRNb2RlbChBbnlBcHBFdmVudEtleXMuTUVOVV9GQUNFX0NMSUNLKSk7XG4gIH1cblxuICBtZW51SXRlbUNsaWNrKG1lbnVJdGVtOiBBbnlBcHBNZW51SXRlbSkge1xuICAgIGlmKG1lbnVJdGVtKSAgICBcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsPEFueUFwcE1lbnVJdGVtPihBbnlBcHBFdmVudEtleXMuTUVOVV9JVEVNX0NMSUNLLCBtZW51SXRlbSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0b3IsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5pbXBvcnQgeyBBbnlBcHBFdmVudE1vZGVsLCBBbnlBcHBUcmVlTW9kZWwgfSBmcm9tICcuLi9jb21wb25lbnRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWEtY29tcC1zaWRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cImxldmVsKjEwXCI+XG4gIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICA8YWEtY29tcC1zaWRlLW1lbnUtaXRlbSAob25FdmVudCk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCIgW2l0ZW1dPVwiaXRlbVwiIFtsZXZlbF09XCJsZXZlbFwiPjwvYWEtY29tcC1zaWRlLW1lbnUtaXRlbT5cblxuICAgIDxkaXY+PCEtLVtoaWRkZW5dPVwiaXRlbS5jaGlsZHJlbj8ubGVuZ3RoID09IDAgfHwgIWl0ZW0uZXhwYW5kZWRcIi0tPlxuICAgICAgPGFhLWNvbXAtc2lkZS1tZW51IFtpdGVtc109XCJpdGVtLmNoaWxkcmVuXCIgW2xldmVsXT1cImxldmVsKzFcIj48L2FhLWNvbXAtc2lkZS1tZW51PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbXM6IEFueUFwcFRyZWVNb2RlbFtdO1xuICBASW5wdXQoKSBsZXZlbDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIoX2luamVjdG9yKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLy8gcGFzcyBldmVudCBlbWl0dGVyIHRvIHRoZSBhcHBcbiAgb25JdGVtQ2xpY2sobW9kZWw6IEFueUFwcEV2ZW50TW9kZWw8QW55QXBwVHJlZU1vZGVsPikge1xuICAgIGlmKG1vZGVsKVxuICAgICAgdGhpcy5vbkV2ZW50LmVtaXQobW9kZWwpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbnlBcHBUcmVlTW9kZWwsIEFueUFwcEV2ZW50TW9kZWwsIEFueUFwcEV2ZW50S2V5cyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMubW9kZWwnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi8uLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXNpZGUtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiaXRlbVwiIChjbGljayk9XCJjbGlja01lbnVJdGVtKClcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFtjbGFzcy5zdWJdPVwibGV2ZWwgPiAwXCI+XG4gICAgXG4gICAgPHNwYW4+e3tpdGVtLnRleHR9fTwvc3Bhbj5cbiAgICBcbiAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmNoaWxkcmVuPy5sZW5ndGggPiAwXCI+XG4gICAgICAgIHt7aXRlbS5leHBhbmRlZCA/ICdrZXlib2FyZF9hcnJvd19kb3duJyA6ICdrZXlib2FyZF9hcnJvd19yaWdodCd9fVxuICAgIDwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYGJ1dHRvbnt3aWR0aDoxMDAlO3RleHQtYWxpZ246bGVmdH1idXR0b246bm90KC5zdWIpIHNwYW57dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfW1hdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bWFyZ2luOjRweH0uc3Vie2ZvbnQtd2VpZ2h0OjQwMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTWVudUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBBbnlBcHBCYXNlQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IEFueUFwcFRyZWVNb2RlbDtcbiAgQElucHV0KCkgbGV2ZWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0OiBJbmplY3Rvcikge1xuICAgIHN1cGVyKF9pbmplY3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbGlja01lbnVJdGVtKCkgeyAgICBcbiAgICBpZih0aGlzLml0ZW0uY2hpbGRyZW4gJiYgdGhpcy5pdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXRlbS5leHBhbmRlZCA9ICF0aGlzLml0ZW0uZXhwYW5kZWQ7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVtLm5hdmlnYXRlVXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMub25FdmVudC5lbWl0KG5ldyBBbnlBcHBFdmVudE1vZGVsPEFueUFwcFRyZWVNb2RlbD4oQW55QXBwRXZlbnRLZXlzLk1FTlVfSVRFTV9DTElDSywgdGhpcy5pdGVtKSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucydcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0U2lkZW5hdk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0VHJlZU1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSwgTWF0TWVudU1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGUsIE1hdFNvcnRNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdFNsaWRlck1vZHVsZSwgTWF0UGFnaW5hdG9ySW50bCwgTWF0U29ydEhlYWRlckludGxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tICcuL2NvbXBvbmVudHMuY29uZmlnJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS9mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VuZXJpY1BhZ2luYXRvckludGwgfSBmcm9tICcuL3RhYmxlL3BhZ2luYXRvci5pbnRsJztcbmltcG9ydCB7IEdlbmVyaWNTb3J0SGVhZGVySW50bCB9IGZyb20gJy4vdGFibGUvc29ydC5pbnRsJztcbmltcG9ydCB7IFRvcE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZU1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlU2VsZWN0RW51bSB9IGZyb20gJy4vY29tcG9uZW50cy5jb25maWcnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG5cbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIC8vTWF0VHJlZU1vZHVsZSxcbiAgICAvL01hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LCBJbnB1dENvbXBvbmVudCwgQ2hlY2tib3hDb21wb25lbnQsIFNlbGVjdENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1EaXJlY3RpdmUsIFRleHRhcmVhQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50LCBJY29uQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCxcbiAgICBUb3BNZW51Q29tcG9uZW50LCBTaWRlTWVudUNvbXBvbmVudCxcbiAgICAvLyBubyBleHBvcnRcbiAgICBTaWRlTWVudUl0ZW1Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LCBJbnB1dENvbXBvbmVudCwgQ2hlY2tib3hDb21wb25lbnQsIFNlbGVjdENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1EaXJlY3RpdmUsIFRleHRhcmVhQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50LCBJY29uQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCxcbiAgICBUb3BNZW51Q29tcG9uZW50LCBTaWRlTWVudUNvbXBvbmVudCxcbiAgICAvLyBtYXRlcmlhbCBleHBvcnRzXG4gICAgTWF0U2lkZW5hdk1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZVxuICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbXBvbmVudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyxcbiAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICBtZXNzYWdlRHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG5cbiAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICBwYWdpbmF0b3JfZmlyc3RQYWdlOiBcIkZpcnN0IHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9sYXN0UGFnZTogXCJMYXN0IHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9pdGVtc1BlclBhZ2U6IFwiSXRlbXMgcGVyIHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9vZjogXCJvZlwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX25leHRQYWdlOiBcIk5leHQgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX3ByZXZpb3VzUGFnZTogXCJQcmV2aW91cyBwYWdlXCIsXG4gICAgICAgICAgICBzb3J0X2J1dHRvbkxhYmVsOiBcIkNoYW5nZSBzb3J0aW5nIGZvclwiXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGUtbWFpbCBhZGRyZXNzXCIsXG4gICAgICAgICAgICBwYXR0ZXJuOiBcIllvdXIgaW5wdXQgZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm5cIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJUaGUgbGVuZ3RoIG9mIHlvdXIgaW5wdXQgaXMgdG9vIHNob3J0XCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiVGhlIGxlbmd0aCBvZiB5b3VyIGlucHV0IGlzIHRvbyBsb25nXCIsXG4gICAgICAgICAgICBpbnZhbGlkRm9ybU1lc3NhZ2U6IFwiVGhlIGZvcm0gaXMgaW52YWxpZC4gUGxlYXNlIGNvcnJlY3QgYW55IGVycm9ycy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFibGVDb25maWc6IHtcbiAgICAgICAgICAgIHBhZ2VTaXplOiAyMCxcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbjogVGFibGVTZWxlY3RFbnVtLk5vU2VsZWN0XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgYnV0dG9uVGltZW91dFRocmVzaG9sZDogMjUwXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGZvcm1Db25maWc6IHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsXG4gICAgICAgIHVzZUNsYXNzOiBHZW5lcmljUGFnaW5hdG9ySW50bCxcbiAgICAgICAgZGVwczogW0FOWUFQUF9DT01QT05FTlRTX0NPTkZJR11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE1hdFNvcnRIZWFkZXJJbnRsLFxuICAgICAgICB1c2VDbGFzczogR2VuZXJpY1NvcnRIZWFkZXJJbnRsLFxuICAgICAgICBkZXBzOiBbQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHXVxuICAgICAgfV1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0lBSUMsWUFBWSxHQUFvQixFQUFFLEtBQVM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjtDQUNEOztDQUtBOzs7Ozs7Ozs7SUFTRyxZQUFZLEVB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