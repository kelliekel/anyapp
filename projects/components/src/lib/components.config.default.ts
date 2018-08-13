import { AnyAppComponentsConfig } from "./components.config";
import { TableSelectEnum, LabelPlacementEnum } from "./components.enum";

export const ANYAPP_DEFAULT_COMPONENTS_CONFIG: AnyAppComponentsConfig = {
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
		list_search: 'Search',
		select_emptyText: 'Make a choice',
		form_invalid: 'The form is invalid'
	},

	errorMessages: {
		required: "This field is required",
		email: "Please enter a valid e-mail address",
		pattern: "Your input does not match the pattern",
		minLength: "The length of your input is too short",
		maxLength: "The length of your input is too long",
		invalidFormMessage: "The form is invalid. Please correct any errors."
	},

	inputConfig: {
		labelPlacement: LabelPlacementEnum.Above
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