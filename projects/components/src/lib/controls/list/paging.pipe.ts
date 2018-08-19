import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'paging'
})
export class PagingPipe implements PipeTransform {
    transform(items: any[], page: number, pageSize: number): any[] {
        // let startIndex = page*pageSize;    
        // let startIndexAfterLastItem = startIndex >= items.length;

        // if(startIndexAfterLastItem) {
        //     startIndex = 0;
        //     this.paginator.pageIndex = 0;
        // }

        // let endIndex = startIndex + this.pageSize;
        // //
        // //let endReached = this.dataSource.length-1 < endIndex;
        // //
        // this.pagedDataSource = this.dataSource.slice(startIndex, endIndex);
        return null;
    }
}