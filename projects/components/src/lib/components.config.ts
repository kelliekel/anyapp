import { InjectionToken } from "@angular/core";

export const ANYAPP_COMPONENTS_CONFIG = new InjectionToken<AnyAppComponentsConfig>('anyapp-default-components-options');

export interface AnyAppComponentsConfig {
	messageDuration: number;
	locale: string;
	//
	errorMessages: AnyAppErrorMessages;
	locales: AnyAppLocales;
	//
	buttonConfig: AnyAppButtonConfig;
	formConfig: AnyAppFormConfig;
	tableConfig: AnyAppTableConfig;
	listConfig: AnyAppListConfig;
}

export interface AnyAppButtonConfig {
	buttonTimeoutThreshold: number;
}

export interface AnyAppFormConfig {
}

export interface AnyAppListConfig {
	pageSize: number;
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

	list_noItemsText: string;
	list_sortTitle: string;
	list_sortAscending: string;
	list_sortDescending: string;
	list_search: string;
}

export enum TableSelectEnum {
	NoSelect = 0,
	SingleSelect = 1,
	MultiSelect = 2,
}