import { Component, OnInit, Input, ViewChild, Injector } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AnyAppBaseControl } from '../base-control';

@Component({
  selector: 'aa-comp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AnyAppBaseControl implements OnInit {
  //
  // mandatory
  //  
  @Input() data: any[];
  @Input() columns: string[];
  //
  // Not mandatory
  //
  @Input() allowSort: boolean = true;
  @Input() allowPaging: boolean = true;
  @Input() pageSize: number = 50;
  @Input() allowSelect: boolean = false;
  @Input() allowMultiSelect: boolean = false;
    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection: SelectionModel<any>;

  dataSource: MatTableDataSource<any>;

  constructor(_injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.selection = new SelectionModel<any>(this.allowMultiSelect, []);
    
    if(this.allowPaging) {
      this.paginator.pageSize = this.pageSize;
      this.dataSource.paginator = this.paginator;
    }

    if(this.allowSort)
      this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
