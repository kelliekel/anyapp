import { Component, OnInit } from '@angular/core';
import { AnyAppTreeModel, AnyAppTreeType, AnyAppEventModel, AnyAppEventKeys } from '@anyapp/components';
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
      
      new AnyAppTreeModel('AA_COMPONENTS_LIST', 'List', AnyAppTreeType.Item, null, false, '/components/list'),
      
      new AnyAppTreeModel('AA_COMPONENTS_CONTROLS', 'Controls', AnyAppTreeType.Item, [ 
        new AnyAppTreeModel('AA_COMPONENTS_CONTROLS_BUTTON', 'Button', AnyAppTreeType.Item, null, false, '/components/controls/button')
        ], false)
      
      ], false),
    
    new AnyAppTreeModel('AA_TOOLS', 'AnyApp Tools', AnyAppTreeType.Group, null, false)
  ];

  constructor(private _router: Router) {

  }

  menuItemClick(menuItem: AnyAppEventModel<AnyAppTreeModel>) {
    if(menuItem.key == AnyAppEventKeys.MENU_ITEM_CLICK)
      if(menuItem.value.navigateUrl != "" && menuItem.value.navigateUrl != null)
        this._router.navigateByUrl(menuItem.value.navigateUrl);
  }

  ngOnInit() {

  }
}
