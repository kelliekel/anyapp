import { Component, OnInit, Input, Injector } from '@angular/core';
import { AnyAppBaseControl } from '../../base-control';

@Component({
  selector: 'aa-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends AnyAppBaseControl implements OnInit {
  breadcrumb: string[];

  constructor(injector: Injector) {
    super(injector);
  }

  reset(initialValue: string = null) {
    if(initialValue)
      this.breadcrumb = [initialValue];
  }

  ngOnInit() {
    this.componentsService.breadcrumbChange.subscribe(x => {
      switch(x.key) {
        case 'Add': 
          this.breadcrumb.push(x.value);
          break;
        case 'Remove':
          let index = this.breadcrumb.findIndex(bc => bc == x.value);
          if(index && index >= 0)
            this.breadcrumb.splice(index, this.breadcrumb.length);
          break;
      }
    });
  }

}
