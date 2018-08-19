import { Injectable, Optional, SkipSelf, Inject } from "@angular/core";
import { MatSortHeaderIntl  } from "@angular/material";
import { ANYAPP_COMPONENTS_CONFIG } from "../../components.config";
import { AnyAppComponentsConfig } from "../../components.config";

@Injectable({
    providedIn: 'root'
})
export class GenericSortHeaderIntl extends MatSortHeaderIntl {
	constructor(
    @Inject(ANYAPP_COMPONENTS_CONFIG) private config: AnyAppComponentsConfig) {
			super();

			// set labels
			this._sortBtnLabel = config.locales.sort_buttonLabel;
		}
	
	private _sortBtnLabel: string;
	
	/** ARIA label for the sorting button. */
  sortButtonLabel = (id: string) => {
    return `${this._sortBtnLabel} ${id}`;
  }
}

export function ANYAPP_SORT_PROVIDER_FACTORY(parentIntl: MatSortHeaderIntl) {
  return parentIntl || new MatSortHeaderIntl();
}

export const ANYAPP_SORT_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: ANYAPP_SORT_PROVIDER_FACTORY
};