import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListSettings } from '../../controls/list/list.settings';

@Component({
  selector: 'aa-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  // generic overview
  //

  @Input() title: string;
  @Input() subTitle: string;
  //@Input() actions: any[];
  @Input() data: any[];
  @Input() headerTemplate: any;
  @Input() contentTemplate: any;
  @Input() footerTemplate: any;

  @Output() onSettingsChanged: EventEmitter<ListSettings> = new EventEmitter<ListSettings>();
  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  settingsChanged(event: ListSettings) {
    this.onSettingsChanged.emit(event);
  }

  itemClick(event: any) {
    this.onItemClick.emit(event);
  }

  // show: boolean = true;
  // private _t = "2";
  // changeTemplate() {
  //   this._t = this._t == "2" ? "1" : "2";
  //   this.show = false;
  //   this.template = this.mappings[this._t];
  //   setTimeout(() => {
  //     this.show = true;
  //   }, 1);
  // }

  // private mappings = {
  //   '1': TemplateTestComponent,
  //   '2': TemplateTest2Component
  // };


  loadData() {

  }

}
