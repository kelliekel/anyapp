import { Optional } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";
import { AnyAppComponentsConfig } from "../components.config";
export declare class GenericPaginatorIntl extends MatPaginatorIntl {
    private config;
    constructor(config: AnyAppComponentsConfig);
    private _of;
    /** A label for the range of items within the current page and the length of the whole list. */
    getRangeLabel: (page: number, pageSize: number, length: number) => string;
}
export declare function ANYAPP_PAGINATOR_PROVIDER_FACTORY(parentIntl: MatPaginatorIntl): MatPaginatorIntl;
export declare const ANYAPP_PAGINATOR_PROVIDER: {
    provide: typeof MatPaginatorIntl;
    deps: Optional[][];
    useFactory: typeof ANYAPP_PAGINATOR_PROVIDER_FACTORY;
};
