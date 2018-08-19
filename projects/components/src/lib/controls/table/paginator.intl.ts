import { Injectable, Optional, SkipSelf, Inject } from "@angular/core";
import { MatPaginatorIntl  } from "@angular/material";
import { ANYAPP_COMPONENTS_CONFIG } from "../../components.config";
import { AnyAppComponentsConfig } from "../../components.config";

@Injectable({
    providedIn: 'root'
})
export class GenericPaginatorIntl extends MatPaginatorIntl {
	constructor(
    @Inject(ANYAPP_COMPONENTS_CONFIG) private config: AnyAppComponentsConfig) {
			super();

			// set labels
			this.itemsPerPageLabel = config.locales.paginator_itemsPerPage;
			this.nextPageLabel = config.locales.paginator_nextPage;
			this.previousPageLabel = config.locales.paginator_previousPage;
			this.firstPageLabel = config.locales.paginator_firstPage;
			this.lastPageLabel = config.locales.paginator_lastPage;
			//
			this._of = config.locales.paginator_of;
		}
	
	private _of: string;
	
	/** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 ${this._of} ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} ${this._of} ${length}`;
  }
}

export function ANYAPP_PAGINATOR_PROVIDER_FACTORY(parentIntl: MatPaginatorIntl) {
  return parentIntl || new MatPaginatorIntl();
}

export const ANYAPP_PAGINATOR_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: ANYAPP_PAGINATOR_PROVIDER_FACTORY
};