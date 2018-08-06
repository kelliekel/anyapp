/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatSliderModule, MatPaginatorIntl, MatSortHeaderIntl } from '@angular/material';
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
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu/side-menu-item/side-menu-item.component';
import { TableSelectEnum } from './components.config';
export class ComponentsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ComponentsModule,
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
                            sort_buttonLabel: "Change sorting for"
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
                        buttonConfig: {
                            buttonTimeoutThreshold: 250
                        },
                        formConfig: {}
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
        };
    }
}
ComponentsModule.decorators = [
    { type: NgModule, args: [{
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
                    MatProgressBarModule,
                    MatCheckboxModule,
                    MatSlideToggleModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatSliderModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatInputModule
                ],
                declarations: [
                    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
                    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
                    TopMenuComponent, SideMenuComponent,
                    SideMenuItemComponent
                ],
                exports: [
                    TableComponent, InputComponent, CheckboxComponent, SelectComponent, ButtonComponent, DatepickerComponent,
                    FormDirective, TextareaComponent, LabelComponent, SliderComponent, IconComponent, LoadingComponent, ErrorComponent,
                    TopMenuComponent, SideMenuComponent,
                    MatSidenavModule, MatToolbarModule
                ],
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQTtBQUM5RSxPQUFPLEVBQ0wsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBbUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUNsSCxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFDN0gsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFDakgsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUE2Q3RELE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHdCQUF3QjtvQkFDakMsUUFBUSxFQUFFO3dCQUNSLGVBQWUsRUFBRSxJQUFJO3dCQUNyQixNQUFNLEVBQUUsT0FBTzt3QkFFZixPQUFPLEVBQUU7NEJBQ1AsbUJBQW1CLEVBQUUsWUFBWTs0QkFDakMsa0JBQWtCLEVBQUUsV0FBVzs0QkFDL0Isc0JBQXNCLEVBQUUsZ0JBQWdCOzRCQUN4QyxZQUFZLEVBQUUsSUFBSTs0QkFDbEIsa0JBQWtCLEVBQUUsV0FBVzs0QkFDL0Isc0JBQXNCLEVBQUUsZUFBZTs0QkFDdkMsZ0JBQWdCLEVBQUUsb0JBQW9CO3lCQUN2Qzt3QkFFRCxhQUFhLEVBQUU7NEJBQ2IsUUFBUSxFQUFFLHdCQUF3Qjs0QkFDbEMsS0FBSyxFQUFFLHFDQUFxQzs0QkFDNUMsT0FBTyxFQUFFLHVDQUF1Qzs0QkFDaEQsU0FBUyxFQUFFLHVDQUF1Qzs0QkFDbEQsU0FBUyxFQUFFLHNDQUFzQzs0QkFDakQsa0JBQWtCLEVBQUUsaURBQWlEO3lCQUN0RTt3QkFDRCxXQUFXLEVBQUU7NEJBQ1gsUUFBUSxFQUFFLEVBQUU7NEJBQ1osWUFBWSxFQUFFLGVBQWUsQ0FBQyxRQUFRO3lCQUN2Qzt3QkFFRCxZQUFZLEVBQUU7NEJBQ1osc0JBQXNCLEVBQUUsR0FBRzt5QkFDNUI7d0JBRUQsVUFBVSxFQUFFLEVBQ1g7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ2pDO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLElBQUksRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUNqQyxDQUFDO1NBQ0gsQ0FBQztLQUNIOzs7WUE5RkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsdUJBQXVCO29CQUV2QixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsYUFBYTtvQkFDYixhQUFhO29CQUdiLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7b0JBQ3hHLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO29CQUNsSCxnQkFBZ0IsRUFBRSxpQkFBaUI7b0JBRW5DLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7b0JBQ3hHLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO29CQUNsSCxnQkFBZ0IsRUFBRSxpQkFBaUI7b0JBRW5DLGdCQUFnQixFQUFFLGdCQUFnQjtpQkFDbkM7YUFFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucydcbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0U2lkZW5hdk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0VHJlZU1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSwgTWF0TWVudU1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGUsIE1hdFNvcnRNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdFNsaWRlck1vZHVsZSwgTWF0UGFnaW5hdG9ySW50bCwgTWF0U29ydEhlYWRlckludGxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBBTllBUFBfQ09NUE9ORU5UU19DT05GSUcgfSBmcm9tICcuL2NvbXBvbmVudHMuY29uZmlnJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IExhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS9mb3JtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VuZXJpY1BhZ2luYXRvckludGwgfSBmcm9tICcuL3RhYmxlL3BhZ2luYXRvci5pbnRsJztcbmltcG9ydCB7IEdlbmVyaWNTb3J0SGVhZGVySW50bCB9IGZyb20gJy4vdGFibGUvc29ydC5pbnRsJztcbmltcG9ydCB7IFRvcE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZU1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc2lkZS1tZW51LWl0ZW0vc2lkZS1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlU2VsZWN0RW51bSB9IGZyb20gJy4vY29tcG9uZW50cy5jb25maWcnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG5cbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIC8vTWF0VHJlZU1vZHVsZSxcbiAgICAvL01hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LCBJbnB1dENvbXBvbmVudCwgQ2hlY2tib3hDb21wb25lbnQsIFNlbGVjdENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1EaXJlY3RpdmUsIFRleHRhcmVhQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50LCBJY29uQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCxcbiAgICBUb3BNZW51Q29tcG9uZW50LCBTaWRlTWVudUNvbXBvbmVudCxcbiAgICAvLyBubyBleHBvcnRcbiAgICBTaWRlTWVudUl0ZW1Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRhYmxlQ29tcG9uZW50LCBJbnB1dENvbXBvbmVudCwgQ2hlY2tib3hDb21wb25lbnQsIFNlbGVjdENvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBEYXRlcGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1EaXJlY3RpdmUsIFRleHRhcmVhQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50LCBJY29uQ29tcG9uZW50LCBMb2FkaW5nQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCxcbiAgICBUb3BNZW51Q29tcG9uZW50LCBTaWRlTWVudUNvbXBvbmVudCxcbiAgICAvLyBtYXRlcmlhbCBleHBvcnRzXG4gICAgTWF0U2lkZW5hdk1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZVxuICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbXBvbmVudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyxcbiAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICBtZXNzYWdlRHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG5cbiAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICBwYWdpbmF0b3JfZmlyc3RQYWdlOiBcIkZpcnN0IHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9sYXN0UGFnZTogXCJMYXN0IHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9pdGVtc1BlclBhZ2U6IFwiSXRlbXMgcGVyIHBhZ2VcIixcbiAgICAgICAgICAgIHBhZ2luYXRvcl9vZjogXCJvZlwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX25leHRQYWdlOiBcIk5leHQgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX3ByZXZpb3VzUGFnZTogXCJQcmV2aW91cyBwYWdlXCIsXG4gICAgICAgICAgICBzb3J0X2J1dHRvbkxhYmVsOiBcIkNoYW5nZSBzb3J0aW5nIGZvclwiXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGUtbWFpbCBhZGRyZXNzXCIsXG4gICAgICAgICAgICBwYXR0ZXJuOiBcIllvdXIgaW5wdXQgZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm5cIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogXCJUaGUgbGVuZ3RoIG9mIHlvdXIgaW5wdXQgaXMgdG9vIHNob3J0XCIsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IFwiVGhlIGxlbmd0aCBvZiB5b3VyIGlucHV0IGlzIHRvbyBsb25nXCIsXG4gICAgICAgICAgICBpbnZhbGlkRm9ybU1lc3NhZ2U6IFwiVGhlIGZvcm0gaXMgaW52YWxpZC4gUGxlYXNlIGNvcnJlY3QgYW55IGVycm9ycy5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGFibGVDb25maWc6IHtcbiAgICAgICAgICAgIHBhZ2VTaXplOiAyMCxcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbjogVGFibGVTZWxlY3RFbnVtLk5vU2VsZWN0XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgYnV0dG9uVGltZW91dFRocmVzaG9sZDogMjUwXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGZvcm1Db25maWc6IHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE1hdFBhZ2luYXRvckludGwsXG4gICAgICAgIHVzZUNsYXNzOiBHZW5lcmljUGFnaW5hdG9ySW50bCxcbiAgICAgICAgZGVwczogW0FOWUFQUF9DT01QT05FTlRTX0NPTkZJR11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IE1hdFNvcnRIZWFkZXJJbnRsLFxuICAgICAgICB1c2VDbGFzczogR2VuZXJpY1NvcnRIZWFkZXJJbnRsLFxuICAgICAgICBkZXBzOiBbQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHXVxuICAgICAgfV1cbiAgICB9O1xuICB9XG59XG4iXX0=