import { Optional } from "@angular/core";
import { MatSortHeaderIntl } from "@angular/material";
import { AnyAppComponentsConfig } from "../components.config";
export declare class GenericSortHeaderIntl extends MatSortHeaderIntl {
    private config;
    constructor(config: AnyAppComponentsConfig);
    private _sortBtnLabel;
    /** ARIA label for the sorting button. */
    sortButtonLabel: (id: string) => string;
}
export declare function ANYAPP_SORT_PROVIDER_FACTORY(parentIntl: MatSortHeaderIntl): MatSortHeaderIntl;
export declare const ANYAPP_SORT_PROVIDER: {
    provide: typeof MatSortHeaderIntl;
    deps: Optional[][];
    useFactory: typeof ANYAPP_SORT_PROVIDER_FACTORY;
};
