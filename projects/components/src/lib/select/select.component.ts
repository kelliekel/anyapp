import { Component, OnInit, forwardRef, Input, Injector, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AnyAppModelControl } from '../model-control';

@Component({
  selector: 'aa-comp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, //Angular internaly injects all values that are registered on the NG_VALUE_ACCESSOR token
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent extends AnyAppModelControl implements OnInit, OnChanges {
  @Input() items: any[];
  @Input() valueField: string = "id";
  @Input() textField: string = "text";

  @Input() multiple: boolean = false;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string;
  
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

  selectItem(event: any) {
    this.onSelect.emit(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      if(changes["items"]) {
        this.isArrayOfObjects = this.setIsArrayOfObjects(changes["items"].currentValue);
      }
    }
  }
  
  isArrayOfObjects: boolean = null;
  setIsArrayOfObjects(items: any[]) {
    if(items && items.length > 0) {
      return items.some(val=> {
        return typeof val == "object";
      });
    }
    return false;
  }
}
