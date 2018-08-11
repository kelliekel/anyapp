import { Component, OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { FormControl } from '@angular/forms';
import { SelectedTabModel } from './tab.model';

@Component({
  selector: 'aa-comp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends AnyAppBaseControl implements OnInit {  
  selected = new FormControl(0);

  @Input() tabs: string[];
  @Output() onTabChange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(_injector: Injector) {
    super(_injector);
  }

  getSelectedTab(): SelectedTabModel {
    if(this.selected)
      return new SelectedTabModel(this.selected.value, this.tabs[this.selected.value]);
    //
    return new SelectedTabModel(-1, null);
  }

  getSelectedTabName(): string {
    if(this.selected)
      return this.tabs[this.selected.value];
    //
    return null;
  }

  getSelectedIndex(): number {
    if(this.selected)
    return this.selected.value
    //
    return null;
  }

  tabChange(event: number) {
    this.selected.setValue(event);
    this.onTabChange.emit(new SelectedTabModel(event, this.tabs[event]));
  }

  ngOnInit() {
  }

}