/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Injector } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AnyAppBaseControl } from '../base-control';
export class TableComponent extends AnyAppBaseControl {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        super(_injector);
        //
        // Not mandatory
        //
        this.allowSort = true;
        this.allowPaging = true;
        this.pageSize = 50;
        this.allowSelect = false;
        this.allowMultiSelect = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.data);
        this.selection = new SelectionModel(this.allowMultiSelect, []);
        if (this.allowPaging) {
            this.paginator.pageSize = this.pageSize;
            this.dataSource.paginator = this.paginator;
        }
        if (this.allowSort)
            this.dataSource.sort = this.sort;
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected == numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aa-comp-table',
                template: `<table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">
  
  <ng-container *ngIf="allowSelect" matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox *ngIf="allowMultiSelect" (change)="$event ? masterToggle() : null"
                    [checked]="selection.hasValue() && isAllSelected()"
                    [indeterminate]="selection.hasValue() && !isAllSelected()">
      </mat-checkbox>
    </th>
    <td mat-cell *matCellDef="let row">
      <mat-checkbox (click)="$event.stopPropagation()"
                    (change)="$event ? selection.toggle(row) : null"
                    [checked]="selection.isSelected(row)">
      </mat-checkbox>
    </td>
  </ng-container>

  <ng-container *ngFor="let col of columns" [matColumnDef]="col">
    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{col}} </th>
    <td mat-cell *matCellDef="let element"> {{element[col]}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="columns"></tr>
  <tr mat-row *matRowDef="let row; columns: columns;"></tr>
</table>

<mat-paginator showFirstLastButtons></mat-paginator>`,
                styles: [`table{width:100%}`]
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: Injector }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFueWFwcC9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWlDcEQsTUFBTSxxQkFBc0IsU0FBUSxpQkFBaUI7Ozs7SUFxQm5ELFlBQVksU0FBbUI7UUFDN0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O3lCQWJXLElBQUk7MkJBQ0YsSUFBSTt3QkFDUixFQUFFOzJCQUNFLEtBQUs7Z0NBQ0EsS0FBSztLQVV6Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QztRQUVELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNwQzs7Ozs7SUFHRCxhQUFhOztRQUNYLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDO0tBQy9COzs7OztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyRTs7O1lBakZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREEwQnlDO2dCQUNuRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUM5Qjs7OztZQW5DNkMsUUFBUTs7O21CQXdDbkQsS0FBSztzQkFDTCxLQUFLO3dCQUlMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt3QkFFTCxTQUFTLFNBQUMsWUFBWTttQkFDdEIsU0FBUyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQW55QXBwQmFzZUNvbnRyb2wgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYS1jb21wLXRhYmxlJyxcbiAgdGVtcGxhdGU6IGA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFsbG93U2VsZWN0XCIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJhbGxvd011bHRpU2VsZWN0XCIgKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBjb2x1bW5zXCIgW21hdENvbHVtbkRlZl09XCJjb2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tjb2x9fSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGNvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG5cbjxtYXQtcGFnaW5hdG9yIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5gLFxuICBzdHlsZXM6IFtgdGFibGV7d2lkdGg6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBleHRlbmRzIEFueUFwcEJhc2VDb250cm9sIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy9cbiAgLy8gbWFuZGF0b3J5XG4gIC8vICBcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IHN0cmluZ1tdO1xuICAvL1xuICAvLyBOb3QgbWFuZGF0b3J5XG4gIC8vXG4gIEBJbnB1dCgpIGFsbG93U29ydDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFsbG93UGFnaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlciA9IDUwO1xuICBASW5wdXQoKSBhbGxvd1NlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd011bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBzZWxlY3Rpb246IFNlbGVjdGlvbk1vZGVsPGFueT47XG5cbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XG5cbiAgY29uc3RydWN0b3IoX2luamVjdG9yOiBJbmplY3RvcikgeyBcbiAgICBzdXBlcihfaW5qZWN0b3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0aGlzLmFsbG93TXVsdGlTZWxlY3QsIFtdKTtcbiAgICBcbiAgICBpZih0aGlzLmFsbG93UGFnaW5nKSB7XG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgfVxuXG4gICAgaWYodGhpcy5hbGxvd1NvcnQpXG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT0gbnVtUm93cztcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gIH1cbn1cbiJdfQ==