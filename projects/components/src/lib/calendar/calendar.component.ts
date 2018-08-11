import { Component, OnInit, ViewChild, Injector, Input, Output, EventEmitter } from '@angular/core';
import { MatCalendar, DateAdapter } from '@angular/material';
import { AnyAppBaseControl } from '../base-control';

@Component({
  selector: 'aa-comp-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent extends AnyAppBaseControl implements OnInit {
  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>;

  @Input() locale: string;
  @Output() onDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  
  constructor(
    _injector: Injector,
    private _adapter: DateAdapter<any>) {
    super(_injector);
    
    this.locale = this.config.locale;
  }

  ngOnInit() {
    this._adapter.setLocale(this.locale);

    this._datePicker.selectedChange.subscribe(x => {
      this.onDateChange.emit(x);
    });
  }

}
