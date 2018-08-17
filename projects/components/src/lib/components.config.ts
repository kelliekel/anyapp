import { TableSelectEnum, LabelPlacementEnum } from "./components.enum";
//export const ANYAPP_COMPONENTS_CONFIG = new InjectionToken<AnyAppComponentsConfig>('anyapp-default-components-options');

export class ANYAPP_COMPONENTS_CONFIG implements AnyAppComponentsConfig {
	messageDuration: 3000;
	locale: "en-US";

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
		list_search: 'Search',
		select_emptyText: 'Make a choice',
		form_invalid: 'The form is invalid'
	};

	errorMessages: {
		required: "This field is required",
		email: "Please enter a valid e-mail address",
		pattern: "Your input does not match the pattern",
		minLength: "The length of your input is too short",
		maxLength: "The length of your input is too long",
		invalidFormMessage: "The form is invalid. Please correct any errors."
	};

	inputConfig: {
		labelPlacement: LabelPlacementEnum.Above,
		slideToggle: true
	};

	tableConfig: {
		pageSize: 20,
		selectOption: TableSelectEnum.NoSelect
	};

	listConfig: {
		pageSize: 20
	};

	buttonConfig: {
		buttonTimeoutThreshold: 1000
	};

	formConfig: {
	}
}

export interface AnyAppComponentsConfig {
	messageDuration: number;
	locale: string;
	//
	errorMessages: AnyAppErrorMessages;
	locales: AnyAppLocales;
	//
	inputConfig: AnyAppInputConfig;
	//
	buttonConfig: AnyAppButtonConfig;
	formConfig: AnyAppFormConfig;
	tableConfig: AnyAppTableConfig;
	listConfig: AnyAppListConfig;
}

export interface AnyAppButtonConfig {
	buttonTimeoutThreshold: number;
}

export interface AnyAppInputConfig {
	labelPlacement: LabelPlacementEnum;
	slideToggle: boolean;
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

	select_emptyText: string;

	form_invalid: string;
}