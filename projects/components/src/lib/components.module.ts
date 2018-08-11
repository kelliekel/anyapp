import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule, MatSidenavModule, MatIconModule, MatTreeModule, MatDividerModule, MatToolbarModule, MatMenuModule,
  MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatCheckboxModule, MatInputModule,
  MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatSliderModule, MatPaginatorIntl, MatSortHeaderIntl,
  MatTooltipModule, MatProgressSpinnerModule, MatExpansionModule, MatTabsModule
} from '@angular/material';

import { ANYAPP_COMPONENTS_CONFIG } from './components.config';
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
import { TableSelectEnum } from './components.config';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    //MatTreeModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule    
  ],
  declarations: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuComponent, SideMenuGroupComponent, HeaderComponent, ListComponent, SearchComponent,
    ListComponent, TabsComponent, CalendarComponent, MenuComponent,
    // no export
    SideMenuItemComponent, HintComponent, FilterPipe, SortPipe, PagingPipe, SortLabelPipe
  ],
  exports: [
    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
    TopMenuComponent, SideMenuComponent, HeaderComponent, ListComponent, SearchComponent, ListComponent, TabsComponent,
    CalendarComponent, MenuComponent
    // material exports
    //MatSidenavModule, MatToolbarModule
  ],
  providers: [{
    provide: ANYAPP_COMPONENTS_CONFIG,
    useValue: {
      messageDuration: 3000,
      locale: "en-US",

      locales: {
        paginator_firstPage: "First page",
        paginator_lastPage: "Last page",
        paginator_itemsPerPage: "Items per page",
        paginator_of: "of",
        paginator_nextPage: "Next page",
        paginator_previousPage: "Previous page",
        sort_buttonLabel: "Change sorting for",        
        list_noItemsText: "No items found.",
        list_sortTitle: "Sort by",
        list_sortAscending: "Ascending",
        list_sortDescending: "Descending",
        list_search: 'Search'
      },

      errorMessages: {
        required: "This field is required",
        email: "Please enter a valid e-mail address",
        pattern: "Your input does not match the pattern",
        minLength: "The length of your input is too short",
        maxLength: "The length of your input is too long",
        invalidFormMessage: "The form is invalid. Please correct any errors."
      },

      tableConfig: {
        pageSize: 20,
        selectOption: TableSelectEnum.NoSelect
      },

      listConfig: {
        pageSize: 20
      },

      buttonConfig: {
        buttonTimeoutThreshold: 250
      },

      formConfig: {
      }
    }
  },
  {
    provide: MatPaginatorIntl,
    useClass: GenericPaginatorIntl,
    deps: [ANYAPP_COMPONENTS_CONFIG]
  },
  {
    provide: MatSortHeaderIntl,
    useClass: GenericSortHeaderIntl,
    deps: [ANYAPP_COMPONENTS_CONFIG]
  }]
})
export class ComponentsModule {
}
