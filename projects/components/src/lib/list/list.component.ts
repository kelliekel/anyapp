import { Component, OnInit, ContentChild, TemplateRef, Injector, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { AnyAppBaseControl } from '../base-control';
import { filter } from 'rxjs/operators';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { PagingPipe } from './paging.pipe';
import { ListSettings } from './list.settings';

@Component({
  selector: 'aa-comp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FilterPipe, SortPipe, PagingPipe]
})
export class ListComponent extends AnyAppBaseControl implements OnInit, OnChanges {
  @ContentChild("header")
  headerTemplate: TemplateRef<any>; // todo: add a template-ref-type waarbij title desc en image geset kunnen worden
  @ContentChild("content")
  contentTemplate: TemplateRef<any>;
  @ContentChild("footer")
  footerTemplate: TemplateRef<any>;
  //@Input() showDefaultFooterTemplate: boolean = true;

  @Input() items: any[];
  @Input() listType: 'server' | 'client' = 'client';
  //
  @Input() allowSort: boolean = true;
  @Input() allowPaging: boolean;
  
  @Input() settings: ListSettings;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any[];
  pagedDataSource: any[];
  expandedIndex: number;
  sortingFields: string[];
    
  constructor(_injector: Injector, private filterPipe: FilterPipe, private sortPipe: SortPipe) {
    super(_injector);
    this.settings = ListSettings.DEFAULT(3); //this.config.listConfig.pageSize
    this.allowPaging = this.config.listConfig.pageSize > 0;
  }

  ngOnInit() { 
    //
    this.setPagedDataSource(0);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes["items"]) {  
      this.sortingFields = (this.items != null && this.items.length > 0) ? Object.keys(this.items[0]) : null; 
      this.dataSource = this.items;
      // if(this.allowPaging) {
      //   this.setPagedDataSource(0);
      // }
      // else {
      //   this.settings.page = this.items.length;
      // }
    }
  }

  paging(event: PageEvent) {
    this.setPagedDataSource(event ? event.pageIndex : 0);
  }

  setPagedDataSource(page: number) {
    let startIndex = page*this.settings.pageSize;    
    let startIndexAfterLastItem = startIndex >= this.dataSource.length;

    if(startIndexAfterLastItem) {
      startIndex = 0;
      this.paginator.pageIndex = 0; // reset paging component      
    }

    let endIndex = startIndex + this.settings.pageSize;
    this.settings.page = page; // update list settings 
    this.pagedDataSource = this.dataSource.slice(startIndex, endIndex);
  }

  search(event: string) {
    this.settings.search = event; // update list settings 
    this.dataSource = this.filterPipe.transform(this.items, this.settings.search);
    this.setPagedDataSource(0); // reset the paged datasource for now
  }

  sort(event: string) {
    this.settings.setSort(event);
    this.dataSource = this.sortPipe.transform(this.dataSource, this.settings.sort, this.settings.sortType);
    // no need to update pagedDataSource
  }
}