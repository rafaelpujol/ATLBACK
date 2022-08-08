import { Pipe, PipeTransform } from '@angular/core';
import { applicationModule } from '../models/applicationModules';

@Pipe({
    name: 'bookfilter',
    pure: false
})
export class AplicationModuleFilterPipe implements PipeTransform {
  transform(items: applicationModule[], filter: applicationModule): applicationModule[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: applicationModule) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {applicationModule} app The book to compare to the filter.
   * @param {applicationModule} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(app: applicationModule, filter: applicationModule): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (app[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (app[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}