import { Component, OnInit, Input, Injector, AfterViewInit } from '@angular/core';
import { AnyAppFormControl } from '../../form-control';
import { ANYAPP_COLOR, ANYAPP_SIZES } from '../../components.types';

@Component({
  selector: 'aa-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends AnyAppFormControl implements OnInit, AfterViewInit {
  @Input() icon: string;
  @Input() color: ANYAPP_COLOR = "basic";
  @Input() inline: boolean = false;
  @Input() size: ANYAPP_SIZES = 'medium';

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngAfterViewInit() {
    this.inline = this.size == null;
  }

}
