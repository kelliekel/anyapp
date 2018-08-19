import { Pipe, PipeTransform, Inject } from '@angular/core';
import { ANYAPP_COMPONENTS_CONFIG, AnyAppComponentsConfig } from '../../components.config';
@Pipe({
    name: 'sortLabel'
})
export class SortLabelPipe implements PipeTransform {
    constructor(@Inject(ANYAPP_COMPONENTS_CONFIG) private _config: AnyAppComponentsConfig) {

    }

    transform(by: string, type: 'asc' | 'desc'): string { //by: string, type: 'asc' | 'desc'
      //(settings?.sort ? config.locales.list_sortTitle + ' ' + settings?.sort + ' ' + settings?.sortType + '' : '')
      let txt = '';
 
      if(by && by != '') {
        txt = this._config.locales.list_sortTitle + ' ' + by;

        if(type == 'asc')
          txt += ' ' + this._config.locales.list_sortAscending.toLowerCase();
        else
          txt += ' ' + this._config.locales.list_sortDescending.toLowerCase();
      }

      return txt;
    }
}