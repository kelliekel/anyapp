import { OnInit, Injector } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AnyAppBaseControl } from '../base-control';
export declare class TableComponent extends AnyAppBaseControl implements OnInit {
    data: any[];
    columns: string[];
    allowSort: boolean;
    allowPaging: boolean;
    pageSize: number;
    allowSelect: boolean;
    allowMultiSelect: boolean;
    paginator: MatPaginator;
    sort: MatSort;
    selection: SelectionModel<any>;
    dataSource: MatTableDataSource<any>;
    constructor(_injector: Injector);
    ngOnInit(): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
}
