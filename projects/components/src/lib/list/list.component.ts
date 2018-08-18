import { Component, OnInit, ContentChild, TemplateRef, Injector, Input, SimpleChanges, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { AnyAppBaseControl } from '../base-control';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { ListSettings } from './list.settings';
import { ListItems } from './list.items';

@Component({
  selector: 'aa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [FilterPipe, SortPipe]
})
export class ListComponent extends AnyAppBaseControl implements OnInit, OnChanges {
  // todo: add a template-ref-type waarbij title desc en image geset kunnen worden
  @ContentChild("header") headerTemplate: TemplateRef<any>;
  @ContentChild("content") contentTemplate: TemplateRef<any>;
  @ContentChild("footer") footerTemplate: TemplateRef<any>;

  @Input() titleField: string = "title";
  @Input() descriptionField: string = "description";
  @Input() iconField: string = "icon";
  //@Input() showDefaultFooterTemplate: boolean = true;

  @Input() data: ListItems | any[];  
  @Input() listType: 'server' | 'client' = 'client'; // dit hoeft niet
  @Input() settings: ListSettings;
  @Output() onSettingsChanged: EventEmitter<ListSettings> = new EventEmitter<ListSettings>();
  //
  @Input() allowSort: boolean = true;
  @Input() allowPaging: boolean;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSourceInput: ListItems;
  dataSource: any[];
  collectionSize: number;
  pagedDataSource: any[];
  expandedIndex: number;
  sortingFields: string[];
    
  constructor(_injector: Injector, private filterPipe: FilterPipe, private sortPipe: SortPipe) {
    super(_injector);
    this.settings = ListSettings.DEFAULT(this.config.listConfig.pageSize); //
    this.allowPaging = this.config.listConfig.pageSize > 0;
  }

  ngOnInit() { 
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes["data"]) {
      // make sure the inner list always works with a ListItems object
      if(changes["data"].currentValue instanceof Array) {
        this.data = new ListItems(changes["data"].currentValue, changes["data"].currentValue.length);
      }
      this.dataSourceInput = <ListItems>this.data;
      this.sortingFields = (this.data && this.dataSourceInput.items && this.dataSourceInput.items.length > 0) ? Object.keys(this.dataSourceInput.items[0]) : null;      
      this.dataSourceInput.total = this.dataSourceInput.total | this.dataSourceInput.items.length; 
      this.dataSource = this.dataSourceInput.items;
      this.collectionSize = this.dataSourceInput.total;
      
      if(this.listType == 'client') {
        this.updateClientPagedDataSource(0);
      }
      else {
        this.pagedDataSource = this.dataSource.slice(0, this.settings.pageSize);
      }
    }
  }

  emitServerSettings() {
    this.onSettingsChanged.emit(this.settings);
  }

  changePage(event: PageEvent) {
    this.settings.page = event.pageIndex; // update list settings; might be overriden later

    if(this.listType == 'client') {
      this.updateClientPagedDataSource(event ? event.pageIndex : 0);
    }
    else {
      this.emitServerSettings();
    }
  }

  search(event: string) {
    this.settings.search = event; // update list settings
    
    if(this.listType == 'client') {
      this.dataSource = this.filterPipe.transform(this.dataSourceInput.items, this.settings.search);
      this.collectionSize = this.dataSource.length;
      this.updateClientPagedDataSource(0); // reset the paged datasource for now
    }
    else {
      this.emitServerSettings();
    }
  }

  sort(event: string) {
    this.settings.setSort(event);

    if(this.listType == 'client') {
      this.dataSource = this.sortPipe.transform(this.dataSource, this.settings.sort, this.settings.sortType);
      this.updateClientPagedDataSource(this.settings.page);
    }
    else {
      this.emitServerSettings();
    }
  }

  updateClientPagedDataSource(page: number) {
    let startIndex = page*this.settings.pageSize;    

    let startIndexAfterLastItem = startIndex >= this.collectionSize;
    let paginatorIndexDifferentFromPage = this.paginator && page != this.paginator.pageIndex;
    if(startIndexAfterLastItem || paginatorIndexDifferentFromPage) {
        startIndex = 0;
        this.settings.page = 0; // reset list settings page    
        this.paginator.firstPage();
    }
    
    let endIndex = startIndex + this.settings.pageSize;
    this.pagedDataSource = this.dataSource.slice(startIndex, endIndex);
  }
}