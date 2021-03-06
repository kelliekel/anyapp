import { Component, OnInit, Input, Injector, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AnyAppFormControl } from '../../form-control';

@Component({
  selector: 'aa-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  // providers: [
  //   { 
  //     provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
  //     useExisting: forwardRef(() => SearchComponent),
  //     multi: true
  //   }
  // ]
})
export class SearchComponent extends AnyAppFormControl implements OnInit {  
  private _searchValueChange: Subject<any> = new Subject<any>();
  private _delay: number = 400;
  
  //inputValue: any;
  searchControl: FormControl = new FormControl();

  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string = "text";
  @Input() hint: string;
  @Input() maxLength: number = null;

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
    this._searchValueChange
      .pipe(debounceTime(this._delay))
      .pipe(distinctUntilChanged())
      .subscribe(x => {
        this.onSearch.emit(x);
      });

    this.searchControl.valueChanges.subscribe(x => {
      this._searchValueChange.next(x)
    });
  }
}
