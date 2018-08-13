import { Component, OnInit, Input, ViewChild, Injector } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AnyAppBaseControl } from '../base-control';
import { TableSelectEnum } from '../components.enum';

@Component({
  selector: 'aa-table',
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
  @Input() allowPaging: boolean;
  @Input() pageSize: number;
  @Input() allowSelect: boolean;
  @Input() allowMultiSelect: boolean;
    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection: SelectionModel<any>;

  dataSource: MatTableDataSource<any>;

  constructor(_injector: Injector) { 
    super(_injector);
    this.pageSize = this.config.tableConfig.pageSize;
    this.allowPaging = this.config.listConfig.pageSize > 0;
    this.allowSelect = (this.config.tableConfig.selectOption != TableSelectEnum.NoSelect);
    this.allowMultiSelect = (this.config.tableConfig.selectOption == TableSelectEnum.MultiSelect);
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
