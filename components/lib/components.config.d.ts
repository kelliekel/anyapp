import { InjectionToken } from "@angular/core";
export declare const ANYAPP_COMPONENTS_CONFIG: InjectionToken<AnyAppComponentsConfig>;
export interface AnyAppComponentsConfig {
    messageDuration: number;
    locale: string;
    errorMessages: AnyAppErrorMessages;
    locales: AnyAppLocales;
    buttonConfig: AnyAppButtonConfig;
    formConfig: AnyAppFormConfig;
    tableConfig: AnyAppTableConfig;
}
export interface AnyAppButtonConfig {
    buttonTimeoutThreshold: number;
}
export interface AnyAppFormConfig {
}
export interface AnyAppTableConfig {
    pageSize: number;
    selectOption: TableSelectEnum;
}
export interface AnyAppErrorMessages {
    required: string;
    email: string;
    pattern: string;
    minLength: string;
    maxLength: string;
    invalidFormMessage: string;
}
export interface AnyAppLocales {
    paginator_firstPage: string;
    paginator_lastPage: string;
    paginator_itemsPerPage: string;
    paginator_of: string;
    paginator_nextPage: string;
    paginator_previousPage: string;
    sort_buttonLabel: string;
}
export declare enum TableSelectEnum {
    NoSelect = 0,
    SingleSelect = 1,
    MultiSelect = 2,
}
