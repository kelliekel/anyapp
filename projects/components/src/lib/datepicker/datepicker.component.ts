import { Component, OnInit, Input, forwardRef, Inject, Injector } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from '../components.config';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';

const moment = /*_rollupMoment ||*/ _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
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

@Component({
  selector: 'aa-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    },
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class DatepickerComponent extends AnyAppModelControl implements OnInit, ControlValueAccessor {  
  @Input() placeholder: string;
	@Input() label: string;
	@Input() hint: string;

  private _locale: string;

  constructor(
    _injector: Injector,
    private _adapter: DateAdapter<any>) {
    super(_injector);

    this._locale = this.config.locale;
  }

  ngOnInit() {
    this._adapter.setLocale(this._locale);
    this.initializeForm();
  }
}
