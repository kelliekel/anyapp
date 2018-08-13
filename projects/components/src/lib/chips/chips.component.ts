import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { ANYAPP_COLOR } from '../components.types';

@Component({
  selector: 'aa-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent extends AnyAppBaseControl implements OnInit {  
  @Input() color: ANYAPP_COLOR = 'basic';
  @Input() chips: string | string[];

  @Output() onChipClick: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  chipClick(event: any) {
    this.onChipClick.emit(event);
  }

  ngOnInit() {
  }

}
