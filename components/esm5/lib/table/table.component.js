/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Injector } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AnyAppBaseControl } from '../base-control';
var TableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TableComponent, _super);
    function TableComponent(_injector) {
        var _this = _super.call(this, _injector) || this;
        //
        // Not mandatory
        //
        _this.allowSort = true;
        _this.allowPaging = true;
        _this.pageSize = 50;
        _this.allowSelect = false;
        _this.allowMultiSelect = false;
        return _this;
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dataSource = new MatTableDataSource(this.data);
        this.selection = new SelectionModel(this.allowMultiSelect, []);
        if (this.allowPaging) {
            this.paginator.pageSize = this.pageSize;
            this.dataSource.paginator = this.paginator;
        }
        if (this.allowSort)
            this.dataSource.sort = this.sort;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    TableComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    TableComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aa-comp-table',
                    template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \n  <ng-container *ngIf=\"allowSelect\" matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox *ngIf=\"allowMultiSelect\" (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <ng-container *ngFor=\"let col of columns\" [matColumnDef]=\"col\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[col]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columns;\"></tr>\n</table>\n\n<mat-paginator showFirstLastButtons></mat-paginator>",
                    styles: ["table{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    TableComponent.propDecorators = {
        data: [{ type: Input }],
        columns: [{ type: Input }],
        allowSort: [{ type: Input }],
        allowPaging: [{ type: Input }],
        pageSize: [{ type: Input }],
        allowSelect: [{ type: Input }],
        allowMultiSelect: [{ type: Input }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
    };
    return TableComponent;
}(AnyAppBaseControl));
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.data;
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.allowSort;
    /** @type {?} */
    TableComponent.prototype.allowPaging;
    /** @type {?} */
    TableComponent.prototype.pageSize;
    /** @type {?} */
    TableComponent.prototype.allowSelect;
    /** @type {?} */
    TableComponent.prototype.allowMultiSelect;
    /** @type {?} */
    TableComponent.prototype.paginator;
    /** @type {?} */
    TableComponent.prototype.sort;
    /** @type {?} */
    TableComponent.prototype.selection;
    /** @type {?} */
    TableComponent.prototype.dataSource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBaUNoQiwwQ0FBaUI7SUFxQm5ELHdCQUFZLFNBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sU0FBUyxDQUFDLFNBQ2pCOzs7OzBCQWQ2QixJQUFJOzRCQUNGLElBQUk7eUJBQ1IsRUFBRTs0QkFDRSxLQUFLO2lDQUNBLEtBQUs7O0tBVXpDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxDQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDcEM7SUFFRCxnRkFBZ0Y7Ozs7O0lBQ2hGLHNDQUFhOzs7O0lBQWI7O1FBQ0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztRQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUM7S0FDL0I7SUFFRCxnRkFBZ0Y7Ozs7O0lBQ2hGLHFDQUFZOzs7O0lBQVo7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0tBQ3JFOztnQkFqRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc3FDQTBCeUM7b0JBQ25ELE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUM5Qjs7OztnQkFuQzZDLFFBQVE7Ozt1QkF3Q25ELEtBQUs7MEJBQ0wsS0FBSzs0QkFJTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7NEJBRUwsU0FBUyxTQUFDLFlBQVk7dUJBQ3RCLFNBQVMsU0FBQyxPQUFPOzt5QkFwRHBCO0VBb0NvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBbnlBcHBCYXNlQ29udHJvbCB9IGZyb20gJy4uL2Jhc2UtY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhLWNvbXAtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWxsb3dTZWxlY3RcIiBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgPG1hdC1jaGVja2JveCAqbmdJZj1cImFsbG93TXVsdGlTZWxlY3RcIiAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCIkZXZlbnQgPyBzZWxlY3Rpb24udG9nZ2xlKHJvdykgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiPlxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sIG9mIGNvbHVtbnNcIiBbbWF0Q29sdW1uRGVmXT1cImNvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiB7e2NvbH19IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbF19fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogY29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cblxuPG1hdC1wYWdpbmF0b3Igc2hvd0ZpcnN0TGFzdEJ1dHRvbnM+PC9tYXQtcGFnaW5hdG9yPmAsXG4gIHN0eWxlczogW2B0YWJsZXt3aWR0aDoxMDAlfWBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQW55QXBwQmFzZUNvbnRyb2wgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL1xuICAvLyBtYW5kYXRvcnlcbiAgLy8gIFxuICBASW5wdXQoKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCkgY29sdW1uczogc3RyaW5nW107XG4gIC8vXG4gIC8vIE5vdCBtYW5kYXRvcnlcbiAgLy9cbiAgQElucHV0KCkgYWxsb3dTb3J0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWxsb3dQYWdpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIEBJbnB1dCgpIGFsbG93U2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFsbG93TXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIHNlbGVjdGlvbjogU2VsZWN0aW9uTW9kZWw8YW55PjtcblxuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PjtcblxuICBjb25zdHJ1Y3RvcihfaW5qZWN0b3I6IEluamVjdG9yKSB7IFxuICAgIHN1cGVyKF9pbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4odGhpcy5kYXRhKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRoaXMuYWxsb3dNdWx0aVNlbGVjdCwgW10pO1xuICAgIFxuICAgIGlmKHRoaXMuYWxsb3dQYWdpbmcpIHtcbiAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB9XG5cbiAgICBpZih0aGlzLmFsbG93U29ydClcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PSBudW1Sb3dzO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxufVxuIl19