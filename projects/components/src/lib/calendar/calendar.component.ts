import { Component, OnInit, ViewChild, Injector, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { MatCalendar, DateAdapter } from '@angular/material';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent extends AnyAppModelControl implements OnInit {
  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  @Output() onDateChange: EventEmitter<Date> = new EventEmitter<Date>();
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

    this._datePicker.selectedChange.subscribe(x => {
      this.onDateChange.emit(x);
    });
  }

}
