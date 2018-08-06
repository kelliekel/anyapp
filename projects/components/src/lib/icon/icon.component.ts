import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppFormControl } from '../form-control';

@Component({
  selector: 'aa-comp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends AnyAppFormControl implements OnInit {
  @Input() icon: string;
  @Input() color: string;
  @Input() inline: boolean = true;
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = null; // default = inline = true

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.initializeForm();
  }

}
