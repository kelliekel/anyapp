import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();
        return items.filter(it => {
            let keys = Object.keys(it);
            let found = false;
            
            keys.forEach(x => {
                let val = it[x];
                found = found || (val ? val.toString().toLowerCase().includes(searchText) : false);
            });

            return found;
        });
    }
}