import { Component, OnInit } from '@angular/core';
import { AnyAppTreeModel, AnyAppTreeType, AnyAppEventModel, AnyAppEventKeys, ComponentsService } from '@anyapp/components';
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

      new AnyAppTreeModel('AA_COMPONENTS_LAZYLOAD', 'Lazy load', AnyAppTreeType.Item, null, false, '/components/lazy-load'),
      new AnyAppTreeModel('AA_COMPONENTS_LIST', 'List', AnyAppTreeType.Item, null, false, '/components/list'),
      new AnyAppTreeModel('AA_COMPONENTS_TABLE', 'Table', AnyAppTreeType.Item, null, false, '/components/table'),
      new AnyAppTreeModel('AA_COMPONENTS_FORM', 'Form', AnyAppTreeType.Item, null, false, '/components/form'),
      new AnyAppTreeModel('AA_COMPONENTS_DYNAMIC_FORM', 'Dynamic form', AnyAppTreeType.Item, null, false, '/components/dynamic-form'),
      new AnyAppTreeModel('AA_COMPONENTS_DYNAMIC_COMPILE', 'Runtime compile (lazy-load)', AnyAppTreeType.Item, null, false, '/components/dynamic-compile'),

      new AnyAppTreeModel('AA_COMPONENTS_CONTROLS', 'Controls', AnyAppTreeType.Item, [
        new AnyAppTreeModel('AA_COMPONENTS_CONTROLS_FIELD', 'Field', AnyAppTreeType.Item, null, false, '/components/controls/field'),
        new AnyAppTreeModel('AA_COMPONENTS_CONTROLS_BUTTON', 'Button', AnyAppTreeType.Item, null, false, '/components/controls/button')
      ], false),

      new AnyAppTreeModel('AA_COMPONENTS_PAGES', 'Pages', AnyAppTreeType.Item, [
        new AnyAppTreeModel('AA_COMPONENTS_PAGES_OVERVIEW', 'Overview', AnyAppTreeType.Item, null, false, '/components/pages/overview'),
        new AnyAppTreeModel('AA_COMPONENTS_PAGES_DETAIL', 'Detail', AnyAppTreeType.Item, null, false, '/components/pages/detail')
      ], false)

    ], false),


    new AnyAppTreeModel('AA_TOOLS', 'AnyApp Tools', AnyAppTreeType.Group, null, false)
  ];

  constructor(private _router: Router) {

  }

  menuItemClick(menuItem: AnyAppEventModel<AnyAppTreeModel>) {
    if (menuItem.key == AnyAppEventKeys.MENU_ITEM_CLICK)
      if (menuItem.value.navigateUrl != "" && menuItem.value.navigateUrl != null)
        this._router.navigateByUrl(menuItem.value.navigateUrl);
  }

  ngOnInit() {

  }
}
