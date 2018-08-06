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
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    /**
     * @return {?}
     */
    ComponentsModule.forRoot = /**
     * @return {?}
     */
    function () {
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
    };
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
    return ComponentsModule;
}());
export { ComponentsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW55YXBwL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQTtBQUM5RSxPQUFPLEVBQ0wsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBbUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUNsSCxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFDN0gsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFDakgsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEy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LGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO3dCQUNsSCxnQkFBZ0IsRUFBRSxpQkFBaUI7d0JBRW5DLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7d0JBQ3hHLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjO3dCQUNsSCxnQkFBZ0IsRUFBRSxpQkFBaUI7d0JBRW5DLGdCQUFnQixFQUFFLGdCQUFnQjtxQkFDbkM7aUJBRUY7OzJCQXpFRDs7U0EwRWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJ1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLCBNYXRTaWRlbmF2TW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRUcmVlTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRNZW51TW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZSwgTWF0U29ydE1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0U2xpZGVyTW9kdWxlLCBNYXRQYWdpbmF0b3JJbnRsLCBNYXRTb3J0SGVhZGVySW50bFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmltcG9ydCB7IEFOWUFQUF9DT01QT05FTlRTX0NPTkZJRyB9IGZyb20gJy4vY29tcG9uZW50cy5jb25maWcnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsL2xhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtL2Zvcm0uZGlyZWN0aXZlJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW5lcmljUGFnaW5hdG9ySW50bCB9IGZyb20gJy4vdGFibGUvcGFnaW5hdG9yLmludGwnO1xuaW1wb3J0IHsgR2VuZXJpY1NvcnRIZWFkZXJJbnRsIH0gZnJvbSAnLi90YWJsZS9zb3J0LmludGwnO1xuaW1wb3J0IHsgVG9wTWVudUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NpZGUtbWVudS9zaWRlLW1lbnUtaXRlbS9zaWRlLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVTZWxlY3RFbnVtIH0gZnJvbSAnLi9jb21wb25lbnRzLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcblxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgLy9NYXRUcmVlTW9kdWxlLFxuICAgIC8vTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsIElucHV0Q29tcG9uZW50LCBDaGVja2JveENvbXBvbmVudCwgU2VsZWN0Q29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIERhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybURpcmVjdGl2ZSwgVGV4dGFyZWFDb21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQsIEljb25Db21wb25lbnQsIExvYWRpbmdDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgIFRvcE1lbnVDb21wb25lbnQsIFNpZGVNZW51Q29tcG9uZW50LFxuICAgIC8vIG5vIGV4cG9ydFxuICAgIFNpZGVNZW51SXRlbUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsIElucHV0Q29tcG9uZW50LCBDaGVja2JveENvbXBvbmVudCwgU2VsZWN0Q29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIERhdGVwaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybURpcmVjdGl2ZSwgVGV4dGFyZWFDb21wb25lbnQsIExhYmVsQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQsIEljb25Db21wb25lbnQsIExvYWRpbmdDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LFxuICAgIFRvcE1lbnVDb21wb25lbnQsIFNpZGVNZW51Q29tcG9uZW50LFxuICAgIC8vIG1hdGVyaWFsIGV4cG9ydHNcbiAgICBNYXRTaWRlbmF2TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlXG4gIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29tcG9uZW50c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3tcbiAgICAgICAgcHJvdmlkZTogQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHLFxuICAgICAgICB1c2VWYWx1ZToge1xuICAgICAgICAgIG1lc3NhZ2VEdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcblxuICAgICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICAgIHBhZ2luYXRvcl9maXJzdFBhZ2U6IFwiRmlyc3QgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX2xhc3RQYWdlOiBcIkxhc3QgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX2l0ZW1zUGVyUGFnZTogXCJJdGVtcyBwZXIgcGFnZVwiLFxuICAgICAgICAgICAgcGFnaW5hdG9yX29mOiBcIm9mXCIsXG4gICAgICAgICAgICBwYWdpbmF0b3JfbmV4dFBhZ2U6IFwiTmV4dCBwYWdlXCIsXG4gICAgICAgICAgICBwYWdpbmF0b3JfcHJldmlvdXNQYWdlOiBcIlByZXZpb3VzIHBhZ2VcIixcbiAgICAgICAgICAgIHNvcnRfYnV0dG9uTGFiZWw6IFwiQ2hhbmdlIHNvcnRpbmcgZm9yXCJcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgZW1haWw6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZS1tYWlsIGFkZHJlc3NcIixcbiAgICAgICAgICAgIHBhdHRlcm46IFwiWW91ciBpbnB1dCBkb2VzIG5vdCBtYXRjaCB0aGUgcGF0dGVyblwiLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBcIlRoZSBsZW5ndGggb2YgeW91ciBpbnB1dCBpcyB0b28gc2hvcnRcIixcbiAgICAgICAgICAgIG1heExlbmd0aDogXCJUaGUgbGVuZ3RoIG9mIHlvdXIgaW5wdXQgaXMgdG9vIGxvbmdcIixcbiAgICAgICAgICAgIGludmFsaWRGb3JtTWVzc2FnZTogXCJUaGUgZm9ybSBpcyBpbnZhbGlkLiBQbGVhc2UgY29ycmVjdCBhbnkgZXJyb3JzLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWJsZUNvbmZpZzoge1xuICAgICAgICAgICAgcGFnZVNpemU6IDIwLFxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uOiBUYWJsZVNlbGVjdEVudW0uTm9TZWxlY3RcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgYnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICBidXR0b25UaW1lb3V0VGhyZXNob2xkOiAyNTBcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZm9ybUNvbmZpZzoge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTWF0UGFnaW5hdG9ySW50bCxcbiAgICAgICAgdXNlQ2xhc3M6IEdlbmVyaWNQYWdpbmF0b3JJbnRsLFxuICAgICAgICBkZXBzOiBbQU5ZQVBQX0NPTVBPTkVOVFNfQ09ORklHXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogTWF0U29ydEhlYWRlckludGwsXG4gICAgICAgIHVzZUNsYXNzOiBHZW5lcmljU29ydEhlYWRlckludGwsXG4gICAgICAgIGRlcHM6IFtBTllBUFBfQ09NUE9ORU5UU19DT05GSUddXG4gICAgICB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==