import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule, MatSidenavModule, MatIconModule, MatTreeModule, MatDividerModule, MatToolbarModule, MatMenuModule,
  MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatCheckboxModule, MatInputModule,
  MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatSliderModule, MatPaginatorIntl, MatSortHeaderIntl,
  MatTooltipModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatChipsModule
} from '@angular/material';

import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from './components.config';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { IconComponent } from './icon/icon.component';
import { TextareaComponent } from './textarea/textarea.component';
import { LabelComponent } from './label/label.component';
import { FormDirective } from './form/form.directive';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { GenericPaginatorIntl } from './table/paginator.intl';
import { GenericSortHeaderIntl } from './table/sort.intl';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuGroupComponent } from './side-menu/side-menu-group/side-menu-group.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { HintComponent } from './_hint/hint.component';
import { FilterPipe } from './list/filter.pipe';
import { SortPipe } from './list/sort.pipe';
import { PagingPipe } from './list/paging.pipe';
import { SortLabelPipe } from './list/sort-label.pipe';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { ChipsComponent } from './chips/chips.component';
import { BadgeDirective } from './badge/badge.directive';
import { RaisedButtonComponent } from './button/_raised-button.component';
import { FlatButtonComponent } from './button/_flat-button.component';
import { StrokedButtonComponent } from './button/_stroked-button.component';
import { DefaultButtonComponent } from './button/_default-button.component';
import { IconButtonComponent } from './button/_icon-button.component';
import { FabButtonComponent } from './button/_fab-button.component';
import { FieldComponent } from './field/field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    //MatTreeModule,
    MatButtonModule, MatIconModule, MatSnackBarModule, MatSidenavModule, MatToolbarModule, MatMenuModule,
    MatIconModule, MatDividerModule, MatProgressBarModule, MatCheckboxModule, MatSlideToggleModule,
    MatSelectModule, MatDatepickerModule, MatSliderModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatInputModule, MatTooltipModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule, MatChipsModule
  ],
  declarations: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuComponent, SideMenuGroupComponent, HeaderComponent, ListComponent, SearchComponent,
    ListComponent, TabsComponent, CalendarComponent, MenuComponent, ChipsComponent, BadgeDirective, FieldComponent, 
    DynamicFormComponent,
    // no export
    SideMenuItemComponent, HintComponent, FilterPipe, SortPipe, PagingPipe, SortLabelPipe,
    //
    RaisedButtonComponent, StrokedButtonComponent, FlatButtonComponent, IconButtonComponent, DefaultButtonComponent, FabButtonComponent//, , //, , 
  ],
  exports: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuComponent, HeaderComponent, ListComponent, SearchComponent, ListComponent, TabsComponent,
    CalendarComponent, MenuComponent, ChipsComponent, BadgeDirective, FieldComponent, DynamicFormComponent
    // material exports
    //MatSidenavModule, MatToolbarModule
  ],
  providers: [
    // {
    //   provide: ANYAPP_COMPONENTS_CONFIG,
    //   useValue: ANYAPP_DEFAULT_COMPONENTS_CONFIG
    // },
    {
      provide: MatPaginatorIntl,
      useClass: GenericPaginatorIntl,
      deps: [ANYAPP_COMPONENTS_CONFIG]
    },
    {
      provide: MatSortHeaderIntl,
      useClass: GenericSortHeaderIntl,
      deps: [ANYAPP_COMPONENTS_CONFIG]
    }],
  entryComponents: [
    RaisedButtonComponent, StrokedButtonComponent, FlatButtonComponent, IconButtonComponent, DefaultButtonComponent, FabButtonComponent,
    InputComponent, TextareaComponent, SliderComponent, CheckboxComponent, SelectComponent, DatepickerComponent
  ]
})
export class ComponentsModule {
  static forRoot(config: AnyAppComponentsConfig): ModuleWithProviders {    
    return {
      ngModule: ComponentsModule,
      providers: [
        {
          provide: ANYAPP_COMPONENTS_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
