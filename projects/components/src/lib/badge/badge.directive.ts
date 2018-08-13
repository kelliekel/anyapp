import { Directive, OnInit, OnChanges, Input, Inject, Output, EventEmitter, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnyAppEventModel, AnyAppEventKeys } from '../components.model';
import { AnyAppBaseControl } from '../base-control';
import { MatBadge, ThemePalette, MatBadgeSize } from '@angular/material';
import { ANYAPP_COLOR, ANYAPP_SIZES } from '../components.types';

@Directive({
  selector: '[aa-badge]',
  host: {
    'class': 'mat-badge mat-badge-above mat-badge-after',
    '[class.mat-badge-small]': 'size === "small"',
    '[class.mat-badge-medium]': 'size === "medium"',
    '[class.mat-badge-large]': 'size === "large"'
    // extend with other options 
    // color
  },
})
export class BadgeDirective extends MatBadge implements OnInit {
  @Input('aa-badge')
  get myContent(): string { return this._myContent; }
  set myContent(value: string) {
    this.content = value;
    this._myContent = value;
  }
  private _myContent: string;

  @Input('color')
  get myColor(): ANYAPP_COLOR { return this._myColor; }
  set myColor(value: ANYAPP_COLOR) {
    this.color = <ThemePalette>value;
    this._myColor = value;
  }
  private _myColor: ANYAPP_COLOR;

  
  @Input('size')
  get mySize(): ANYAPP_SIZES { return this._mySize; }
  set mySize(value: ANYAPP_SIZES) {
    this.size = <MatBadgeSize>value;
    this._mySize = value;
  }
  private _mySize: ANYAPP_SIZES;

  ngOnInit() {    
  }
}
