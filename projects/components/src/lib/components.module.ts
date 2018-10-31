import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule, MatSidenavModule, MatIconModule, MatTreeModule, MatDividerModule, MatToolbarModule, MatMenuModule,
  MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatCheckboxModule, MatInputModule,
  MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatSliderModule, MatPaginatorIntl, MatSortHeaderIntl,
  MatTooltipModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatChipsModule, MatDialogModule, MatCardModule
} from '@angular/material';

import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from './components.config';
import { ButtonComponent } from './controls/button/button.component';
import { TableComponent } from './controls/table/table.component';
import { InputComponent } from './fields/input/input.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { SelectComponent } from './fields/select/select.component';
import { DatepickerComponent } from './fields/datepicker/datepicker.component';
import { SliderComponent } from './fields/slider/slider.component';
import { IconComponent } from './controls/icon/icon.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { LabelComponent } from './controls/label/label.component';
import { FormDirective } from './forms/form/form.directive';
import { LoadingComponent } from './controls/loading/loading.component';
import { ErrorComponent } from './fields/error/error.component';
import { GenericPaginatorIntl } from './controls/table/paginator.intl';
import { GenericSortHeaderIntl } from './controls/table/sort.intl';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { SideMenuLayoutComponent } from './layout/side-menu-layout/side-menu-layout.component';
import { SideMenuItemComponent } from './layout/side-menu/side-menu-item/side-menu-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideMenuGroupComponent } from './layout/side-menu/side-menu-group/side-menu-group.component';
import { ListComponent } from './controls/list/list.component';
import { SearchComponent } from './controls/search/search.component';
import { HintComponent } from './fields/_hint/hint.component';
import { FilterPipe } from './controls/list/filter.pipe';
import { SortPipe } from './controls/list/sort.pipe';
import { PagingPipe } from './controls/list/paging.pipe';
import { SortLabelPipe } from './controls/list/sort-label.pipe';
import { TabsComponent } from './controls/tabs/tabs.component';
import { CalendarComponent } from './fields/calendar/calendar.component';
import { MenuComponent } from './controls/menu/menu.component';
import { ChipsComponent } from './controls/chips/chips.component';
import { BadgeDirective } from './controls/badge/badge.directive';
import { RaisedButtonComponent } from './controls/button/_raised-button.component';
import { FlatButtonComponent } from './controls/button/_flat-button.component';
import { StrokedButtonComponent } from './controls/button/_stroked-button.component';
import { DefaultButtonComponent } from './controls/button/_default-button.component';
import { IconButtonComponent } from './controls/button/_icon-button.component';
import { FabButtonComponent } from './controls/button/_fab-button.component';
import { FieldComponent } from './fields/field/field.component';
import { DynamicFormComponent } from './forms/dynamic-form/dynamic-form.component';
import { ComponentsService } from './components.service';
import { MaskDirective } from './fields/mask/mask.directive';
import { NgxMaskModule} from 'ngx-mask';
import { ViewListComponent } from './views/view-list/view-list.component';
import { AnyAppListContentTemplate } from './controls/list/templates/content.template';
import { AnyAppListHeaderTemplate } from './controls/list/templates/header.template';
import { AnyAppListFooterTemplate } from './controls/list/templates/footer.template';
import { AnyAppListTemplate } from './controls/list/templates/template';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';
import { ConfirmComponent } from './controls/confirm/confirm.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';

// // //import * as maskmod from 'ngx-mask';
// // let extras = [];
// // if(moduleAvailable('ngx-mask')) {
// //   extras = [maskmod.NgxMaskModule.forRoot()]
// // }
// declare var require: any;
// let conditionalImports = [];
// try {
//   let ngxMask = require('ngx-mask');
//   if(ngxMask) {
//     conditionalImports = [ngxMask.NgxMaskModule.forRoot()];
//   }
// }
// catch{ console.log('ngx-mask not available'); }

@NgModule({
  imports: [
    NgxMaskModule.forRoot(),
    //...conditionalImports,
    //
    CommonModule, FormsModule, ReactiveFormsModule,
    //MatTreeModule,
    MatButtonModule, MatIconModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatProgressBarModule, MatCheckboxModule, MatSlideToggleModule,
    MatSelectModule, MatDatepickerModule, MatSliderModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatInputModule, MatTooltipModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatChipsModule,
    MatDialogModule, MatCardModule
  ],
  declarations: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuLayoutComponent, SideMenuGroupComponent, HeaderComponent, ListComponent, SearchComponent,
    ListComponent, TabsComponent, CalendarComponent, MenuComponent, ChipsComponent, BadgeDirective, FieldComponent, 
    DynamicFormComponent, ViewListComponent, ViewDetailComponent, ConfirmComponent,
    AnyAppListHeaderTemplate, AnyAppListFooterTemplate, AnyAppListContentTemplate, BreadcrumbComponent,
    // no export
    SideMenuItemComponent, HintComponent, FilterPipe, SortPipe, PagingPipe, SortLabelPipe, MaskDirective,
    //
    RaisedButtonComponent, StrokedButtonComponent, FlatButtonComponent, IconButtonComponent, DefaultButtonComponent, FabButtonComponent
  ],
  exports: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuLayoutComponent, HeaderComponent, ListComponent, SearchComponent, ListComponent, TabsComponent,
    CalendarComponent, MenuComponent, ChipsComponent, BadgeDirective, FieldComponent, DynamicFormComponent, 
    ViewListComponent, ViewDetailComponent, ConfirmComponent, BreadcrumbComponent
    // material exports
    //MatSidenavModule, MatToolbarModule
  ],
  providers: [
    ComponentsService,
    {
      provide: MatPaginatorIntl,
      useClass: GenericPaginatorIntl,
      deps: [ANYAPP_COMPONENTS_CONFIG]
    },
    {
      provide: MatSortHeaderIntl,
      useClass: GenericSortHeaderIntl,
      deps: [ANYAPP_COMPONENTS_CONFIG]
    }
  ],
  entryComponents: [
    RaisedButtonComponent, StrokedButtonComponent, FlatButtonComponent, IconButtonComponent, DefaultButtonComponent, FabButtonComponent,
    InputComponent, TextareaComponent, SliderComponent, CheckboxComponent, SelectComponent, DatepickerComponent,
    AnyAppListHeaderTemplate, AnyAppListFooterTemplate, AnyAppListContentTemplate,
    ConfirmComponent
  ]
})
export class ComponentsModule {
  static forRoot(config: AnyAppComponentsConfig): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [
        { provide: ANYAPP_COMPONENTS_CONFIG, useValue: config }
      ]
    }
  }

  // constructor(@Optional() @SkipSelf() parentModule: ComponentsModule) {
  //   if(parentModule) {
  //       throw new Error('ComponentsModule is already loaded. Import it in the AppModule only');
  //   }
  // }
}
