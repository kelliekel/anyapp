import { Component, OnInit } from '@angular/core';

import { AnyAppTreeModel, AnyAppTreeType } from '@anyapp/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anyapp framework';

  public menu: AnyAppTreeModel[] = <AnyAppTreeModel[]>[
    new AnyAppTreeModel('AA_CORE', 'AnyApp Core', AnyAppTreeType.Group, null, false),

    new AnyAppTreeModel('AA_COMPONENTS', 'AnyApp Components', AnyAppTreeType.Group, [ 
      new AnyAppTreeModel('AA_COMPONENTS_CONTROLS', 'Controls', AnyAppTreeType.Item, [ 
        new AnyAppTreeModel('AA_COMPONENTS_CONTROLS_BUTTON', 'Button', AnyAppTreeType.Item, null, false)
        ], false)
      ], false),
    
    new AnyAppTreeModel('AA_TOOLS', 'AnyApp Tools', AnyAppTreeType.Group, null, false)
  ];

  constructor(private _router: Router) {

  }

  menuItemClick(menuItem: AnyAppTreeModel) {
    debugger;
    if(menuItem.key == 'AA_COMPONENTS_CONTROLS_BUTTON')
      this._router.navigate(['controls/button'])
  }

  ngOnInit() {

  }
}
