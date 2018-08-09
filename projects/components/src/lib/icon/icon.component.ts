import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';
import { ANYAPP_COLOR, ANYAPP_SIZES } from '../components.types';

@Component({
  selector: 'aa-comp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends AnyAppFormControl implements OnInit {
  @Input() icon: string;
  @Input() color: ANYAPP_COLOR = "basic";
  @Input() inline: boolean = false;
  @Input() size: ANYAPP_SIZES = null;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

}
