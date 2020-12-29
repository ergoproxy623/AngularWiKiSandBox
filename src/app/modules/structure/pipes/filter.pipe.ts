import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter', pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], str: string): any[] {
    return   value.filter( (n) => {
          return n.toString() === str;
      });
  }

}
